"use client";

import { Suspense, useRef } from "react";
import { Product } from "@/domain/models/models";
import Image from "next/image";
import { Tag } from "@/components/ui/tag/tag";
import { motion, useScroll, useTransform } from "framer-motion";
import { MotionButton } from "../ui/motion-button";





export function ProductSectionClient({ products }: { products: Product[] }) {
  // logger.log('blogposts in blog posts component', blogPosts)
  return (
    <section id="features" className="relative overflow-hidden">
      <div className="max-w-7xl px-[20px] md:px-0 mx-auto py-[80px] md:py-[160px]">
        <Suspense
          fallback={
            <div className="min-h-[500px]">
              <span className="sr-only">Loading healthcare articles...</span>
              Loading posts...
            </div>
          }
        >
            <ul
              className="relative  flex flex-col gap-[32px] md:gap-[200px] justify-start md:justify-center md:items-center"
              itemScope
              itemType="https://schema.org/ItemList"
          >
            
              {products.map((product, index) => (
              <ProductItem
                key={product.id}
                product={product}
                position={index}
              />
              ))}
            </ul>
        </Suspense>
      </div>
    </section>
  );
}

const ProductItem = ({
  product,
  position,
}: {
  product: Product;
  position: number;
}) => {
  const isImageRight = position % 2 === 0;

  return (
    <li
      className="w-full"
      itemScope
      itemType="https://schema.org/Product"
      itemProp="itemListElement"
    >
      <div className="flex flex-col md:flex-row justify-between items-end gap-[24px] ">
        {/* Image Section */}
        {product.image_url && (
          <div
            className={`relative w-full h-full aspect-[6/3] md:min-h-[400px] rounded-xl overflow-hidden ${
              isImageRight ? "md:order-2" : ""
            }`}
            role="img"
            aria-label={`${product.title} preview image`}
          >
            <ParallaxImage src={product.image_url} alt={product.title} />
          </div>
        )}
        <div className="flex flex-col gap-[24px] md:justify-end h-full w-full">
          {/* Content Section */}
          <div className="flex flex-col justify-between   gap-[20px] ">
            <header className="flex justify-between gap-2">
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    className="w-6 h-6"
                    color="var(--token-8e9f7d65-9fbe-4bbc-aa91-54812dc50f56, rgb(38, 38, 40))"
                    style={{
                      userSelect: "none",
                      display: "inline-block",
                      fill: "var(--token-8e9f7d65-9fbe-4bbc-aa91-54812dc50f56, rgb(38, 38, 40))",
                      color:
                        "var(--token-8e9f7d65-9fbe-4bbc-aa91-54812dc50f56, rgb(38, 38, 40))",
                      flexShrink: 0,
                    }}
                  >
                    <g
                      color="var(--token-8e9f7d65-9fbe-4bbc-aa91-54812dc50f56, rgb(38, 38, 40))"
                    >
                      <path d="M56,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM88,24a8,8,0,0,0-8,8V224a8,8,0,0,0,16,0V32A8,8,0,0,0,88,24Zm40,32a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,128,56Zm40,32a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,168,88Zm40-16a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,208,72Z" />
                    </g>
                  </svg>
                </span>
                <span>
                  <Tag variant="simple" className="px-8 text-[20px]">
                    {product.category}
                  </Tag>
                </span>
              </div>
            </header>

            <div
              className="text-[26px] sm:text-[36px]  font-medium tracking-[-0.02em] flex items-center gap-2"
              itemProp="headline"
            >
              {product.description}
            </div>
            <meta itemProp="position" content={String(position)} />
          </div>

          <div className="flex flex-wrap  gap-[10px]">
            <MotionButton href="/contact" text="Request a Quote" variant="cta"/>
            {/* <Link
              href="/contact"
              className="flex items-center gap-[10px] text-white  text-[16px] bg-[#014441] rounded-full  pl-[20px] pr-[10px] py-[15px]"
            >
              Request a Quote <ChevronRight className="w-6 h-6" />
            </Link> */}

            
            <MotionButton href={product.pdf_url} text="Download Product Brochure" variant="black"/>
            {/* <Link
              href={product.pdf_url}
              className="flex items-center gap-[10px] text-white  text-[16px] bg-[black] rounded-full  pl-[20px] pr-[10px] py-[15px]"
            >
              Download Product Brochure <ChevronRight className="w-6 h-6" />
            </Link> */}
          </div>
        </div>
      </div>
    </li>
  );
};

function ParallaxImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Get the scroll progress relative to the element referenced by containerRef.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map the scroll progress to a translateY effect.
  // Adjust the output range (here: 0 to 50) to change the parallax strength.
  const y = useTransform(scrollYProgress, [0, 1], [50, -200]);

  return (
    <motion.div ref={containerRef} style={{ y }} className="absolute inset-0 w-full md:min-h-[400px] h-[200%]">
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className ? className : ""}`}
        loading="lazy"
        quality={100}
      />
    </motion.div>
  );
}