'use client'

import { motion } from 'framer-motion'
import { TypewriterText } from '@/components/typewriter-text'
import { Button } from '@/components/ui/button'
import { Download, Mail, Github, Linkedin, Code, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-1/3 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Mohan Krishna Thalla
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-muted-foreground">
                Full-Stack & AI Developer
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-lg md:text-xl mb-6 text-muted-foreground max-w-2xl mx-auto">
                Turning ideas into <span className="text-primary font-semibold">scalable, intelligent systems</span>
              </p>
              
              <div className="text-lg md:text-xl font-medium text-primary">
                <TypewriterText 
                  texts={[
                    'AI Developer',
                    'Full-Stack Engineer', 
                    'Problem Solver',
                    'Innovation Driver'
                  ]}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex justify-center gap-6"
            >
              <Link href="https://github.com/mohan13krishna" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com/in/mohan-krishna-thalla" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://leetcode.com/u/Mohan137" className="text-muted-foreground hover:text-primary transition-colors">
                <Code className="h-6 w-6" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Certifications</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">8.1</div>
              <div className="text-muted-foreground">CGPA</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore some of my latest work combining AI, machine learning, and full-stack development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Youtube Spam Detector</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                AI-powered spam detection using BERT and HuggingFace for YouTube comments
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-sm text-sm">BERT</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-sm text-sm">HuggingFace</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-sm text-sm">Python</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">GenEDxAI</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                AI chatbot for students using Google Gemini and Streamlit
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-sm text-sm">Gemini</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-sm text-sm">Streamlit</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-sm text-sm">Python</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center mb-4">
                <Github className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Network Security Analyzer</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Full-stack web application with user authentication and MongoDB backend
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-sm text-sm">React</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-sm text-sm">Node.js</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-sm text-sm">MongoDB</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                View All Projects
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}