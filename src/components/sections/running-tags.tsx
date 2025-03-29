"use client";

import { type Service } from "@/lib/data/services";
import { useEffect, useState, useRef, useCallback } from "react";
// Removed SectionBackground import as it wasn't used in the return
// import { SectionBackground } from "../ui/section-background";

interface RunningTagsProps {
  services: Service[];
  speed?: number; // Pixels per second
}

// Default speed: 50 pixels per second
const DEFAULT_SPEED_PX_PER_SEC = 50;

export function RunningTags({ services, speed = DEFAULT_SPEED_PX_PER_SEC }: RunningTagsProps) {
  // Keep duplicated services in state for React to manage rendering
  const [duplicatedServices, setDuplicatedServices] = useState<Service[]>([]);
  const containerRef = useRef<HTMLDivElement>(null); // The outer overflow hidden container
  const contentWrapperRef = useRef<HTMLDivElement>(null); // The element that will animate

  useEffect(() => {
    // Duplicate the services array ONCE to create the seamless loop content
    setDuplicatedServices([...services, ...services]);
  }, [services]);

  // Use useCallback to memoize the calculation function
  const calculateAndSetAnimation = useCallback(() => {
    if (!contentWrapperRef.current || !containerRef.current) return;

    // Calculate the width of *half* the content (one set of services)
    // scrollWidth gives the total width including the duplicated part
    const totalContentWidth = contentWrapperRef.current.scrollWidth;
    const singleSetWidth = totalContentWidth / 2;

    if (singleSetWidth > 0 && speed > 0) {
      // Duration (in seconds) = Width / Speed (px/sec)
      const durationInSeconds = singleSetWidth / speed;
      // Apply the duration directly via style - ensures it updates correctly
      // Use seconds for CSS animation-duration
      contentWrapperRef.current.style.animationDuration = `${durationInSeconds}s`;
       // Ensure animation is running (it might be paused by default or from hover)
      contentWrapperRef.current.style.animationPlayState = 'running';
    } else {
       // If width is 0 or speed is 0, stop the animation
       contentWrapperRef.current.style.animationDuration = '0s';
       contentWrapperRef.current.style.animationPlayState = 'paused';
    }


  }, [speed]); // Depend only on speed

  useEffect(() => {
    // Calculate initially and whenever services change (causing duplicatedServices to update)
    // We need a slight delay or wait for the next frame to ensure layout is complete
    let animationFrameId: number;
    const runCalculation = () => {
        // Use requestAnimationFrame to wait for the browser to be ready for layout calculation
        animationFrameId = requestAnimationFrame(calculateAndSetAnimation);
    }
    // Run calculation after the duplicated services are set and rendered
    if (duplicatedServices.length > 0) {
        runCalculation();
    }


    // More robust resize handling using ResizeObserver
    const observer = new ResizeObserver(() => {
      // Recalculate on resize of the content wrapper itself
       runCalculation();
    });

    // Observe the container - if its size changes, content width might change
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    // Also observe the content wrapper itself in case its internal size changes
     if (contentWrapperRef.current) {
      observer.observe(contentWrapperRef.current);
    }


    return () => {
      cancelAnimationFrame(animationFrameId); // Clean up animation frame
      observer.disconnect(); // Clean up observer
      // No need for window resize listener if using ResizeObserver on relevant elements
    };
    // Rerun effect if calculation function or the content itself changes
  }, [calculateAndSetAnimation, duplicatedServices]); // Add duplicatedServices dependency


  return (
    // Outer container to clip the overflow and provide hover context
    <div
      ref={containerRef}
      // Ensure it takes available width but constrain with max-w if needed
      className="w-full max-w-lg overflow-hidden rounded-full bg-black py-4 relative group" // Added group for hover state
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* This div scrolls. Use w-max to fit content. */}
      <div
        ref={contentWrapperRef}
        className="flex flex-nowrap w-max animate-scroll group-hover:pause" // Use w-max, add pause on hover via group
        style={{
          // Animation properties are now set via CSS class and duration via JS
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          willChange: "transform", // Keep will-change
          // animationDuration is set dynamically in useEffect
          // animationPlayState is set dynamically and via group-hover
        }}
      >
        {duplicatedServices.map((service, index) => (
          <span
            key={`${service.id}-${index}`} // Key needs to be unique even for duplicates
            // Add padding/margin here instead of gap on parent for potentially more stable width calculation
            className="flex-shrink-0 px-4 py-2 text-[18px] sm:text-[20px] font-normal text-white whitespace-nowrap" // Adjusted padding/size, added whitespace-nowrap
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/Service"
          >
            <meta itemProp="position" content={String(index % services.length + 1)} />
            <span itemProp="name">{service.name}</span>
          </span>
        ))}
      </div>
    </div>
    // Removed the empty SectionBackground and outer <> fragment
  );
}
