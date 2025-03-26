'use client'

import Image from 'next/image'

type IconBadgeProps = {
  text: string
  bgColor?: string
  textColor?: string
  className?: string
  iconSize?: number
  icon?: string
}

export function IconBadge({
  text,
  bgColor = '#0d0d0d',
  textColor = 'text-subtitle',
  className = '',
  iconSize = 15,
  icon = '/logo.png'
}: IconBadgeProps) {


  return (
    <div 
      className={`flex items-center justify-center border border-gray-800 rounded-primary-sm gap-[5px] pl-[15px] pr-[20px] py-[8px] ${className}`}
      style={{ backgroundColor: bgColor }}
    >

      <Image
        src={icon}
        alt="Exceed Media Pro Logo"
        width={iconSize}
        height={iconSize}
        className="h-auto"
      />

      
      <span 
        className="block text-[14px] leading-[1.1] font-medium tracking-[-0.02em]"
        style={{ color: textColor }}
      >
        {text}
      </span>
    </div>
  )
}