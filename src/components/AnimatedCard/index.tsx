'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

const fadeInUpVariant = {
  hidden: { y: 30, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 100,
      duration: 0.3,
      delay: delay * 0.1,
    },
  }),
  hover: {
    y: -5,
    boxShadow: '0 15px 30px rgba(var(--color-primary-rgb), 0.15)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
}

export default function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      className={`glass-card rounded-2xl overflow-hidden border border-white/5 ${className}`}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUpVariant}
      custom={delay}
    >
      {children}
    </motion.div>
  )
}
