"use client"

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { MotionButton } from '../ui/motion-button'
import { IconBadge } from '../ui/icon-badge'
import { services } from '@/lib/data/services'
import { RunningTags } from './running-tags'
import { HeroBackground } from '../ui/hero-background'

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"]
  // })
  // scroll down makes translateY negative , initial scale is 1 , scroll down scalle smaller a little 

  // 3D-like parallax transformations
  // const yHeading = useTransform(scrollYProgress, [0, 1], [0, -200])
  // const ySubheading = useTransform(scrollYProgress, [0, 1], [0, -150])
  // const yButton = useTransform(scrollYProgress, [0, 1], [0, -100])
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  // const rotateX = useTransform(scrollYProgress, [0, 1], [0, -5])
  // const zHeading = useTransform(scrollYProgress, [0, 1], [0, 50])
  // const zSubheading = useTransform(scrollYProgress, [0, 1], [0, 30])

  // Initial entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  }

  return (
    <section
      className="px-5 md:px-0 py-[120px] sm:py-[40px]  sm:pt-[20px] relative overflow-hidden"
      itemScope
      itemType="https://schema.org/WebPageElement"
      ref={ref}
      style={{ perspective: 1000 }}
    >
      <HeroBackground topPosition={900} />
   
      {/* Background layer */}
      <motion.div 
        className="absolute inset-0"
        // style={{
        //   scale: useTransform(scrollYProgress, [0, 1], [1, 0.8]),
        //   y: useTransform(scrollYProgress, [0, 1], [0, -200]),
        //   rotateX: useTransform(scrollYProgress, [0, 1], [0, -5])
        // }}
      />

      <div className='max-w-4xl mx-auto relative'>
        <motion.div 
          className="flex flex-col items-center justify-center gap-[32px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          // style={{ 
          //   scale,
          //   rotateX,
          //   transformStyle: 'preserve-3d'
          // }}
        >
          <IconBadge text="Your Partner in Digital Marketing." />

          <motion.h1
            // style={{ 
            //   y: yHeading,
            //   translateZ: zHeading
            // }}
            className="text-[36px] sm:text-[42px] lg:text-[60px] leading-[1.1] font-bold text[#262625] text-center relative z-10"
            itemProp="headline"
            variants={childVariants}
          >
            We make more clients for your business with effective tools from Google, Facebook & Instagram
          </motion.h1>

          <motion.h2
            // style={{ 
            //   y: ySubheading,
            //   translateZ: zSubheading
            // }}
            className="text-[18px] sm:text-lg font-normal text-center relative z-20"
            itemProp="headline"
            variants={childVariants}
          >
            Internet marketing for e-commerce, b2b, b2c
          </motion.h2>

          <motion.div 
            variants={childVariants}
            
            // style={{ 
            //   y: yButton,
            //   translateZ: 30
            // }}
            className="relative z-30 flex gap-3"
          >
            <MotionButton href="/contact" text="Contact Us" variant="cta" />
            <MotionButton href="/SeePlans" text="See Plans" variant="outline" showChevron={false} />
           
          </motion.div>

          <RunningTags services={services} />
        </motion.div>
      </div>
      <div className="opacity-0 animate-fadeIn"></div>
    </section>
  )
}
