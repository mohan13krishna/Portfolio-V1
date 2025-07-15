'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Code, Heart } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/mohan13krishna', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/mohan-krishna-thalla', icon: Linkedin },
    { name: 'LeetCode', href: 'https://leetcode.com/u/Mohan137', icon: Code },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 mb-4 md:mb-0"
          >
            <span className="text-muted-foreground">Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-muted-foreground">using Next.js + Tailwind</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border text-center text-muted-foreground"
        >
          <p>&copy; 2025 Mohan Krishna Thalla. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
