'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, RefreshCw, Code, BarChart, CheckCircle2 } from 'lucide-react'
import { FaShopify, FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa'
import {
  SiGraphql,
  SiTailwindcss,
  SiGooglecloud,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
} from 'react-icons/si'

type SplitTextProps = {
  text: string
  tag?: keyof React.JSX.IntrinsicElements
  className?: string
  delay?: number
  duration?: number
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  tag: Tag = 'span',
  className,
  delay = 0,
  duration = 0.4,
}) => {
  const letters = useMemo(() => text.split(''), [text])
  return (
    <Tag as={Tag} className={className}>
      {letters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: '0%', opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: delay / 1000 + index * 0.02,
            duration,
            ease: 'easeOut',
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00a0' : char}
        </motion.span>
      ))}
    </Tag>
  )
}

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

const useScreenSize = () => {
  const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const lessThan = (key: keyof typeof breakpoints) => width < breakpoints[key]

  return { width, lessThan }
}

type GooeyFilterProps = {
  id: string
  strength?: number
}

const GooeyFilter: React.FC<GooeyFilterProps> = ({ id, strength = 20 }) => (
  <svg className="absolute inset-0 h-0 w-0">
    <defs>
      <filter id={id}>
        <feGaussianBlur in="SourceGraphic" stdDeviation={strength} result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
          result="gooey"
        />
        <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
      </filter>
    </defs>
  </svg>
)

const TAB_CONTENT = [
  {
    title: 'Mobile & Apps',
    files: [
      'Mobile App Development: Launch custom iOS and Android apps that sync perfectly with your Shopify store — providing your customers with a seamless, branded shopping experience anywhere.',
      'Payment Integration: Set up secure, global payment gateways and custom checkout solutions designed to boost trust and conversion.',
    ],
  },
  {
    title: 'Analytics & Migration',
    files: [
      'Analytics Setup: Unlock the power of data with advanced analytics and reporting to track performance (GA4, Matomo and more)',
      'Platform Migration: Transition effortlessly from any eCommerce platform to Shopify with zero downtime and complete data integrity.',
    ],
  },
  {
    title: 'Marketing & Channels',
    files: [
      'Marketing Automation: Automate your marketing workflows with integrated tools for email campaigns, segmentation, and customer re-engagement.',
      'Multi-Channel Integration: Expand your reach by connecting Shopify with Amazon, eBay, and social platforms for unified cross-channel management.',
    ],
  },
  {
    title: 'ERP & Fulfillment',
    files: [
      'ERP & CRM Integration: Streamline operations and customer management by integrating Shopify with leading ERP and CRM systems for real-time synchronization and workflow automation.',
      'Courier Integration: Simplify fulfillment with automated courier solutions — from real-time shipping rates to tracking updates and delivery management.',
    ],
  },
]

const GooeyDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const screenSize = useScreenSize()

  return (
    <div className="relative w-full h-auto flex justify-center pt-0 pr-10 pb-0 pl-10 font-calendas md:text-xl text-base sm:text-lg bg-white dark:bg-transparent">
      <GooeyFilter id="gooey-filter" strength={screenSize.lessThan('md') ? 10 : 20} />

      <div className="w-11/12 md:w-4/5 relative mt-0 h-[260px] sm:h-[325px] md:h-[390px]">
        <div className="absolute inset-0" style={{ filter: 'url(#gooey-filter)' }}>
          <div className="flex w-full ">
            {TAB_CONTENT.map((_, index) => (
              <div key={index} className="relative flex-1 h-10 md:h-16">
                {activeTab === index && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-[#efefef] dark:bg-neutral-800"
                    transition={{
                      type: 'spring',
                      bounce: 0.0,
                      duration: 0.4,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="w-full h-[260px] sm:h-[325px] md:h-[390px] bg-[#efefef] dark:bg-neutral-900 overflow-hidden text-muted-foreground">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeTab}
                initial={{
                  opacity: 0,
                  y: 50,
                  filter: 'blur(10px)',
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                }}
                exit={{
                  opacity: 0,
                  y: -50,
                  filter: 'blur(10px)',
                }}
                transition={{
                  duration: 0.2,
                  ease: 'easeOut',
                }}
                className="pt-0 pr-8 md:pr-12 pb-0 pl-8 md:pl-12 h-full flex flex-col justify-center"
              >
                <div className="space-y-2 mt-0">
                  <ul>
                    {TAB_CONTENT[activeTab].files.map((file) => (
                      <li
                        key={file}
                        className="border-b border-muted-foreground/50 pt-6 pb-4 text-black dark:text-gray-100 text-left text-xl md:text-2xl"
                      >
                        {file}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="relative flex w-full">
          {TAB_CONTENT.map((tab, index) => (
            <button key={index} onClick={() => setActiveTab(index)} className="flex-1 h-10 md:h-16">
              <span
                className={`w-full h-full flex items-center justify-center ${
                  activeTab === index ? 'text-black dark:text-white' : 'text-muted-foreground'
                }`}
              >
                {tab.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Shopify Store Development',
    description: 'End-to-end store setup and customization tailored to your brand.',
    features: ['Store Setup', 'Theme Customization', 'Visual Identity', 'Responsive Design'],
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: 'Platform Migration Services',
    description: 'Seamless migration from other platforms to Shopify with zero downtime.',
    features: ['Data Migration', 'SEO Preservation', 'Zero Downtime', 'Post-Migration Support'],
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Custom Shopify App Development',
    description: 'Bespoke apps to extend your store functionality and business logic.',
    features: ['Private Apps', 'Public Apps', 'API Integration', 'Custom Logic'],
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Store Optimization & Support',
    description: 'Continuous performance tuning and technical support for growth.',
    features: ['Speed Optimization', 'CRO', 'Technical Support', 'Monthly Audits'],
  },
]

const technologies = [
  {
    name: 'Shopify',
    category: 'Platform',
    icon: <FaShopify className="w-12 h-12 text-[#95BF47]" />,
  },
  {
    name: 'Shopify Plus',
    category: 'Enterprise',
    icon: <FaShopify className="w-12 h-12 text-black" />,
  },
  { name: 'React', category: 'Frontend', icon: <FaReact className="w-12 h-12 text-[#61DAFB]" /> },
  { name: 'Node.js', category: 'Backend', icon: <FaNodeJs className="w-12 h-12 text-[#339933]" /> },
  { name: 'GraphQL', category: 'API', icon: <SiGraphql className="w-12 h-12 text-[#E10098]" /> },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    icon: <SiTailwindcss className="w-12 h-12 text-[#06B6D4]" />,
  },
  { name: 'AWS', category: 'Cloud', icon: <FaAws className="w-12 h-12 text-[#FF9900]" /> },
  {
    name: 'Google Cloud',
    category: 'Cloud',
    icon: <SiGooglecloud className="w-12 h-12 text-[#4285F4]" />,
  },
  {
    name: 'MongoDB',
    category: 'Database',
    icon: <SiMongodb className="w-12 h-12 text-[#47A248]" />,
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    icon: <SiPostgresql className="w-12 h-12 text-[#4169E1]" />,
  },
  { name: 'Docker', category: 'DevOps', icon: <FaDocker className="w-12 h-12 text-[#2496ED]" /> },
  {
    name: 'Kubernetes',
    category: 'DevOps',
    icon: <SiKubernetes className="w-12 h-12 text-[#326CE5]" />,
  },
]

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-center bg-white dark:bg-[#0a0a0a] py-10 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 w-full"
      >
        <SplitText
          text="Services"
          tag="h2"
          className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold mb-6 text-slate-900 dark:text-white leading-none"
          delay={50}
          duration={0.8}
        />
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center px-6">
          Comprehensive eCommerce solutions tailored to your business needs
        </p>
      </motion.div>

      <div className="section-container w-full">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card group p-6 md:p-10 rounded-3xl border border-gray-100 dark:border-neutral-800 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-2xl transition-all duration-500 bg-white/50 dark:bg-neutral-900/70 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-900"
            >
              <div className="text-black dark:text-white mb-8 group-hover:scale-110 transition-transform duration-500 bg-white dark:bg-neutral-800 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md border border-gray-100 dark:border-neutral-700">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{service.description}</p>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-base text-gray-700 dark:text-gray-200"
                  >
                    <CheckCircle2 className="w-5 h-5 text-black dark:text-white flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <h3 className="text-center text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
        Expertise Items
      </h3>
      <div className="mt-16 mb-20 relative z-10 flex items-center justify-center">
        <GooeyDemo />
      </div>

      <section className="min-h-screen flex flex-col justify-center bg-white dark:bg-[#0a0a0a] py-10 transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 w-full"
        >
          <SplitText
            text="Technology"
            tag="h2"
            className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold mb-6 text-slate-900 dark:text-white leading-none"
            delay={50}
            duration={0.8}
          />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center px-6">
            Cutting-edge tools and platforms to build your perfect eCommerce solution
          </p>
        </motion.div>

        <div className="section-container w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 dark:bg-neutral-900 rounded-2xl p-8 text-center border border-gray-200 dark:border-neutral-800 hover:border-black dark:hover:border-white hover:bg-white dark:hover:bg-neutral-800 hover:shadow-lg transition-all duration-300 cursor-default flex flex-col items-center justify-center gap-4"
              >
                <div className="mb-2">{tech.icon}</div>
                <div>
                  <div className="font-bold mb-1 text-lg text-slate-900 dark:text-white">
                    {tech.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    {tech.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

export default ServicesSection
