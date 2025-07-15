'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Code, Database, Globe, Wrench, Brain, Target, Heart } from 'lucide-react'

export default function About() {
  const skills = {
    frontend: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Next.js', level: 80 }
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 75 },
      { name: 'REST APIs', level: 88 },
      { name: 'JWT', level: 80 }
    ],
    languages: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'C', level: 75 }
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 90 },
      { name: 'Postman', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'BERT', level: 80 },
      { name: 'HuggingFace', level: 75 }
    ]
  }

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-primary h-2 rounded-full"
        />
      </div>
    </div>
  )

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
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating intelligent solutions that bridge the gap between AI and real-world applications
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="p-6 text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary">MKT</div>
              </div>
              <h2 className="text-2xl font-bold mb-2">Mohan Krishna Thalla</h2>
              <p className="text-muted-foreground mb-4">Full-Stack & AI Developer</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">AI Engineer</Badge>
                <Badge variant="secondary">Full-Stack</Badge>
                <Badge variant="secondary">Problem Solver</Badge>
              </div>
            </Card>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 h-5 w-5 text-primary" />
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate Full-Stack and AI Developer with hands-on experience in building smart, 
                    scalable web applications and machine learning systems. I strive to solve real-world problems 
                    using a combination of AI, data, and web technologies.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Currently pursuing B.Tech in Computer Science Engineering at ACE Engineering College with 
                    a CGPA of 8.1. My goal is to work in a top-tier multinational company and deliver 
                    impact-driven solutions that make a difference.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-primary" />
                      <span className="text-sm">Solution-Oriented</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="h-5 w-5 text-primary" />
                      <span className="text-sm">Passionate Learner</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-primary" />
                      <span className="text-sm">Global Mindset</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Brain className="h-5 w-5 text-primary" />
                      <span className="text-sm">AI Enthusiast</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
          
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="frontend" className="flex items-center">
                <Globe className="mr-2 h-4 w-4" />
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center">
                <Database className="mr-2 h-4 w-4" />
                Backend
              </TabsTrigger>
              <TabsTrigger value="languages" className="flex items-center">
                <Code className="mr-2 h-4 w-4" />
                Languages
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex items-center">
                <Wrench className="mr-2 h-4 w-4" />
                Tools
              </TabsTrigger>
            </TabsList>

            <TabsContent value="frontend">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend Development</CardTitle>
                  <CardDescription>
                    Building responsive and interactive user interfaces
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      {skills.frontend.slice(0, 3).map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                      ))}
                    </div>
                    <div>
                      {skills.frontend.slice(3).map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="backend">
              <Card>
                <CardHeader>
                  <CardTitle>Backend Development</CardTitle>
                  <CardDescription>
                    Creating robust server-side applications and APIs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      {skills.backend.slice(0, 3).map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                      ))}
                    </div>
                    <div>
                      {skills.backend.slice(3).map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="languages">
              <Card>
                <CardHeader>
                  <CardTitle>Programming Languages</CardTitle>
                  <CardDescription>
                    Proficient in multiple programming languages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      {skills.languages.slice(0, 2).map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                      ))}
                    </div>
                    <div>
                      {skills.languages.slice(2).map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tools">
              <Card>
                <CardHeader>
                  <CardTitle>Development Tools</CardTitle>
                  <CardDescription>
                    Essential tools for modern development workflow
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      {skills.tools.slice(0, 3).map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                      ))}
                    </div>
                    <div>
                      {skills.tools.slice(3).map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly exploring new technologies and approaches to solve complex problems
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Committed to delivering high-quality solutions that exceed expectations
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-muted-foreground">
                Building solutions that make a meaningful difference in people's lives
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
