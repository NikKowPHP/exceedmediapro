'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

type MotionButtonProps = {
  href: string
  text: string
  variant?: 'cta' | 'outline' | 'ghost' | 'black' | 'ctaBlack'
  className?: string
  iconClassName?: string
  showChevron?: boolean
}

export function MotionButton({
  href,
  text,
  variant = 'cta',
  className = '',
  iconClassName = '',
  showChevron = true
}: MotionButtonProps) {
  // Base variants for styling
  const variants = {
    cta: "text-white text-cta bg-action rounded-primary-sm pl-[20px]  pr-[10px] py-[10px] ",
    outline: "text-white text-cta bg-transparent border  border-gray-700 rounded-primary px-[10px] py-[8px]",
    ghost: "text-[#575757] text-[16px] bg-transparent rounded-full pl-[20px] pr-[10px] py-[15px]",
    black: "text-white text-[16px] bg-black rounded-full pl-[20px] pr-[10px] py-[15px] hover:border-gray-500",
    ctaBlack: "text-white text-[16px] bg-[#262625] rounded-full pl-[20px] pr-[10px] py-[10px] hover:border-gray-500"
  }

  // Icon colors based on variant
  const iconColors = {
    cta: "text-white",
    outline: "text-[#b7b7b8]",
    ghost: "text-[#575757]",
    black: "text-white",
    ctaBlack: "text-[#262625]" // Changed to match ctaBlack background
  }

  const baseClassName = variants[variant]
  const chevronClassName = iconClassName || iconColors[variant]
  
  return (
    <Link href={href}>
      <motion.div
        className={`flex items-center gap-[10px] ${baseClassName} ${className}`}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.97 }}
        variants={{
          rest: { scale: 1 },
          hover: { 
            scale: variant === 'cta' ? 0.95 : 0.98,
            border: variant === 'outline' ? 'border-gray-700' : 'border-transparent' 
          }
        }}
      >
        <span>{text}</span>
        {showChevron && (
          variant === 'ctaBlack' ? (
            <motion.div 
              className="p-[10px] bg-white rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="relative w-[20px] h-[20px] overflow-hidden"
                variants={{
                  rest: {},
                  hover: {}
                }}
              >
                <motion.div
                  className="absolute inset-0 flex items-center"
                  variants={{
                    rest: { x: 0 },
                    hover: { x: "100%" }
                  }}
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <ChevronRight className={`w-full h-full ${chevronClassName}`} />
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center"
                  variants={{
                    rest: { x: "-100%", opacity: 0 },
                    hover: { x: 0, opacity: 1 }
                  }}
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <ChevronRight className={`w-full h-full ${chevronClassName}`} />
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              className="relative w-[20px] h-[20px] overflow-hidden"
              variants={{
                rest: {},
                hover: {}
              }}
            >
              <motion.div
                className="absolute inset-0 flex items-center"
                variants={{
                  rest: { x: 0 },
                  hover: { x: "100%" }
                }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <ChevronRight className={`w-full h-full ${chevronClassName}`} />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center"
                variants={{
                  rest: { x: "-100%", opacity: 0 },
                  hover: { x: 0, opacity: 1 }
                }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <ChevronRight className={`w-full h-full ${chevronClassName}`} />
              </motion.div>
            </motion.div>
          )
        )}
      </motion.div>
    </Link>
  )
}