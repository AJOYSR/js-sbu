'use client'

import { motion } from 'framer-motion'

interface AnimatedSectionTitleProps {
  badge: string
  title: string
  description: string
}

const badgeAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const titleAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
}

const descriptionAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.4,
    },
  },
}

export default function AnimatedSectionTitle({
  badge,
  title,
  description,
}: AnimatedSectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <motion.span
        className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={badgeAnimation}
      >
        {badge}
      </motion.span>
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-clip-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={titleAnimation}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-foreground/80 max-w-3xl mx-auto text-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={descriptionAnimation}
      >
        {description}
      </motion.p>
    </div>
  )
}
