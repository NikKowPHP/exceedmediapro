"use client"

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { IconBadge } from "../ui/icon-badge";

export function SubHeroSection() {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  const y = useTransform(scrollY, [0, 1000], [0, 200], { clamp: false });
  const scale = useTransform(scrollY, [0, 1000], [1, 1.15], { clamp: false });

  return (
    <motion.section
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden sm:py-[40px]"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <div className=" max-w-6xl mx-auto relative h-[400px] overflow-hidden sm:h-[800px] ">
        <motion.div 
          style={{ 
            y: shouldReduceMotion ? 0 : y,
            scale: shouldReduceMotion ? 1 : scale,
          }} 
          className="relative inset-0 h-[100%] w-full md:h-[150%]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2,
            ease: "easeOut",
            delay: 0.2 
          }}
        >
          <IconBadge text="Our Mission" />
          <h1 className="text-xl text-white">Our mission is to provide advanced and effective promotion strategies to help your business thrive in the digital space.</h1>
        </motion.div>
      </div>
      <div className="opacity-0 animate-fadeIn"></div>
    </motion.section>
  );
}
