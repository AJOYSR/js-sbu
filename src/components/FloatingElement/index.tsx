'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface FloatingElementProps {
  className?: string
  delay?: number
  duration?: number
  distance?: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function FloatingElement({
  className = '',
  delay = 0,
  duration = 3,
  distance = 15,
  size = 'md',
}: FloatingElementProps) {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-96 h-96',
  }

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${sizeClasses[size]} ${className}`}
      initial={{ y: 0 }}
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay: delay,
      }}
    />
  )
}
