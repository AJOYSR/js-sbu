'use client'
import { motion } from 'framer-motion'
import { Target, Rocket, Building2, Shield, Users, Award } from 'lucide-react'

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white dark:bg-[#0a0a0a] py-10 text-slate-900 dark:text-slate-100 transition-colors duration-300"
    >
      <div className="section-container w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="mb-8 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Brain Station 23 is an AI-ready software service company specializing in resource
              augmentation. We deliver 10X faster solutions for startups, SMEs, and Enterprises
              across Fintech, Pharma, Retail & Distribution.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              We are eCommerce Specialists, now Powering Shopify Excellence. We don&apos;t just
              build stores; we engineer future-proof e-commerce experiences that drive growth and
              maximize ROI.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white dark:text-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                    Our Mission
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Empowering businesses with cutting-edge eCommerce solutions
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-white dark:text-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                    Our Vision
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Leading the future of AI-powered eCommerce innovation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-neutral-900 rounded-3xl p-8 aspect-square flex flex-col items-center justify-center text-center border border-gray-100 dark:border-neutral-800 hover:border-black dark:hover:border-white transition-colors"
              >
                <Building2 className="w-12 h-12 mb-4 text-black dark:text-white" />
                <div className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">5</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium uppercase tracking-wide">
                  Global Offices
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-neutral-900 rounded-3xl p-8 aspect-square flex flex-col items-center justify-center text-center border border-gray-100 dark:border-neutral-800 hover:border-black dark:hover:border-white transition-colors"
              >
                <Shield className="w-12 h-12 mb-4 text-black dark:text-white" />
                <div className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium uppercase tracking-wide">
                  GDPR Compliant
                </div>
              </motion.div>
            </div>
            <div className="space-y-6 mt-12">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-neutral-900 rounded-3xl p-8 aspect-square flex flex-col items-center justify-center text-center border border-gray-100 dark:border-neutral-800 hover:border-black dark:hover:border-white transition-colors"
              >
                <Users className="w-12 h-12 mb-4 text-black dark:text-white" />
                <div className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">850+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium uppercase tracking-wide">
                  Team Members
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-neutral-900 rounded-3xl p-8 aspect-square flex flex-col items-center justify-center text-center border border-gray-100 dark:border-neutral-800 hover:border-black dark:hover:border-white transition-colors"
              >
                <Award className="w-12 h-12 mb-4 text-black dark:text-white" />
                <div className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">5/5</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium uppercase tracking-wide">
                  Client Rating
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
