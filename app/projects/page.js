'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Github, ExternalLink, Play, Sparkles, Brain, Globe, Gamepad2, Wrench } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects', icon: Sparkles },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'web', name: 'Web Apps', icon: Globe },
    { id: 'games', name: 'Games', icon: Gamepad2 },
    { id: 'tools', name: 'Tools', icon: Wrench }
  ]

  const projects = [
    {
      id: 1,
      title: 'Youtube Spam Detector',
      description: 'AI-powered spam detection system using BERT and HuggingFace for analyzing YouTube comments with high accuracy.',
      longDescription: 'A sophisticated machine learning application that uses BERT (Bidirectional Encoder Representations from Transformers) and HuggingFace transformers to detect spam comments on YouTube. The system analyzes comment text patterns, user behavior, and linguistic features to classify comments as spam or legitimate.',
      category: 'ai',
      image: '/api/placeholder/400/300',
      technologies: ['BERT', 'HuggingFace', 'Python', 'NLP', 'TensorFlow'],
      github: 'https://github.com/mohan13krishna/youtube-spam-detector',
      live: null,
      featured: true
    },
    {
      id: 2,
      title: 'GenEDxAI',
      description: 'AI chatbot for students using Google Gemini API and Streamlit for educational assistance.',
      longDescription: 'An intelligent educational chatbot powered by Google Gemini API. Built with Streamlit for a smooth user interface, it helps students with homework, explanations, and learning resources across various subjects.',
      category: 'ai',
      image: '/api/placeholder/400/300',
      technologies: ['Google Gemini', 'Streamlit', 'Python', 'AI', 'NLP'],
      github: 'https://github.com/mohan13krishna/genedxai',
      live: 'https://genedxai.streamlit.app',
      featured: true
    },
    {
      id: 3,
      title: 'Network Security Analyzer',
      description: 'Full-stack web application with user authentication, secure backend, and MongoDB database.',
      longDescription: 'A comprehensive network security analysis tool built with modern web technologies. Features include user authentication, secure API endpoints, real-time monitoring, and detailed security reports stored in MongoDB.',
      category: 'web',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Security'],
      github: 'https://github.com/mohan13krishna/network-security-analyzer',
      live: 'https://network-security-analyzer.vercel.app',
      featured: true
    },
    {
      id: 4,
      title: 'Progress Tracker',
      description: 'GitLab OAuth integration dashboard for tracking internship progress and achievements.',
      longDescription: 'A professional dashboard application that integrates with GitLab OAuth for tracking internship progress, commits, and achievements. Features include real-time statistics, progress visualization, and comprehensive reporting.',
      category: 'web',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'OAuth', 'GitLab API', 'Charts.js', 'Node.js'],
      github: 'https://github.com/mohan13krishna/progress-tracker',
      live: null,
      featured: false
    },
    {
      id: 5,
      title: 'Mobile Price ML Classifier',
      description: 'Machine learning model for predicting mobile phone prices based on specifications.',
      longDescription: 'A comprehensive machine learning project that predicts mobile phone prices using various specifications as features. Includes data preprocessing, feature engineering, model training, and evaluation with multiple algorithms.',
      category: 'ai',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      github: 'https://github.com/mohan13krishna/mobile-price-classifier',
      live: null,
      featured: false
    },
    {
      id: 6,
      title: 'Pomodoro Timer',
      description: 'Productivity tool with customizable timer settings and session tracking.',
      longDescription: 'A modern Pomodoro Timer application designed to boost productivity. Features include customizable work/break intervals, session statistics, sound notifications, and a clean, distraction-free interface.',
      category: 'tools',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Local Storage', 'CSS3', 'JavaScript'],
      github: 'https://github.com/mohan13krishna/pomodoro-timer',
      live: 'https://pomodoro-timer-mk.vercel.app',
      featured: false
    },
    {
      id: 7,
      title: 'Hangman Game',
      description: 'Classic word guessing game with modern UI and difficulty levels.',
      longDescription: 'A modern take on the classic Hangman game with multiple difficulty levels, word categories, hint system, and score tracking. Built with responsive design and smooth animations.',
      category: 'games',
      image: '/api/placeholder/400/300',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Game Logic'],
      github: 'https://github.com/mohan13krishna/hangman-game',
      live: 'https://hangman-game-mk.vercel.app',
      featured: false
    },
    {
      id: 8,
      title: 'GitHubLens',
      description: 'GitHub repository analyzer with statistics and insights visualization.',
      longDescription: 'A comprehensive GitHub repository analyzer that provides detailed statistics, code insights, contribution patterns, and repository health metrics. Features interactive charts and comprehensive reporting.',
      category: 'tools',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'GitHub API', 'Chart.js', 'Node.js'],
      github: 'https://github.com/mohan13krishna/github-lens',
      live: 'https://github-lens.vercel.app',
      featured: false
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my skills in AI, machine learning, and full-stack development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full hover:shadow-lg transition-all duration-300 border-2 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex space-x-2">
                        {project.github && (
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={project.github} target="_blank">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {project.live && (
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={project.live} target="_blank">
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{project.title}</DialogTitle>
                          <DialogDescription>
                            {project.longDescription}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="outline">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex space-x-4">
                            {project.github && (
                              <Button asChild>
                                <Link href={project.github} target="_blank">
                                  <Github className="mr-2 h-4 w-4" />
                                  View Code
                                </Link>
                              </Button>
                            )}
                            {project.live && (
                              <Button variant="outline" asChild>
                                <Link href={project.live} target="_blank">
                                  <Play className="mr-2 h-4 w-4" />
                                  Live Demo
                                </Link>
                              </Button>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">All Projects</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </Button>
              )
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex space-x-2">
                        {project.github && (
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={project.github} target="_blank">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {project.live && (
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={project.live} target="_blank">
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Interested in collaborating?</h3>
          <p className="text-muted-foreground mb-6">
            Let's discuss how we can work together on your next project
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get In Touch
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
