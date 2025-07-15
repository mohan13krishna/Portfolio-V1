'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Building, Calendar, MapPin, ChevronRight, Brain, Code, Users, Zap } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'AI Developer Intern and TechLead (ACEG) ',
      company: 'VISWAM.AI',
      location: 'Hybrid',
      duration: 'May 2025 – Present',
      type: 'Internship',
      description: 'Working on cutting-edge NLP projects using BERT and developing intelligent chatbot systems.',
      responsibilities: [
        'Developing NLP models using BERT and transformer architectures',
        'Building and training chatbot systems for various domains',
        'Implementing machine learning pipelines for text analysis',
        'Collaborating with cross-functional teams on AI initiatives',
        'Optimizing model performance and deployment strategies'
      ],
      technologies: ['BERT', 'Python', 'TensorFlow', 'PyTorch', 'NLP', 'Hugging Face', 'Machine Learning'],
      achievements: [
        'Improved chatbot response accuracy by 25%',
        'Reduced model inference time by 40%',
        'Contributed to 3 major NLP research projects'
      ],
      current: true
    },
    {
      id: 2,
      title: 'Full Stack Apprentice',
      company: 'Gradious',
      location: 'Hybrid',
      duration: 'March 2025 – Present',
      type: 'Apprenticeship',
      description: 'Developing comprehensive web applications with focus on dashboard creation, secure authentication systems, and robust backend architecture.',
      responsibilities: [
        'Building responsive dashboards with React and modern UI libraries',
        'Implementing secure user authentication and authorization systems',
        'Developing RESTful APIs and backend services',
        'Working with databases and data visualization tools',
        'Collaborating in agile development environment'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs', 'JavaScript', 'HTML/CSS'],
      achievements: [
        'Built 5+ production-ready web applications',
        'Implemented secure auth systems for 10+ clients',
        'Reduced dashboard load time by 50%'
      ],
      current: true
    }
  ]

  const skills = [
    { name: 'AI & Machine Learning', icon: Brain, level: 85 },
    { name: 'Full Stack Development', icon: Code, level: 88 },
    { name: 'Team Collaboration', icon: Users, level: 90 },
    { name: 'Problem Solving', icon: Zap, level: 92 }
  ]

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
            Professional Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in the tech industry, building intelligent systems and scalable applications
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block">
                    {exp.current && (
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                    )}
                  </div>
                  
                  {/* Experience Card */}
                  <div className="md:ml-20">
                    <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Building className="h-5 w-5 text-primary" />
                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                            {exp.current && (
                              <Badge variant="default" className="ml-2">Current</Badge>
                            )}
                          </div>
                          <Badge variant="outline">{exp.type}</Badge>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Building className="h-4 w-4" />
                            <span className="font-semibold text-primary">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        
                        <CardDescription className="text-base mt-3">
                          {exp.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        {/* Responsibilities */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1 text-primary" />
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1 text-primary" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1 text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Developed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Professional Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{skill.name}</h3>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-primary h-2 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Currently Available</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm actively seeking full-time opportunities in AI/ML and Full-Stack development. 
            Looking to contribute to innovative projects at top-tier companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contact">
                Get In Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
