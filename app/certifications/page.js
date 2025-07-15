'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Award, Calendar, ExternalLink, Star, Code, Database, Globe, Shield } from 'lucide-react'

export default function Certifications() {
  const certificationCategories = [
    {
      name: 'HackerRank',
      icon: Code,
      color: 'text-green-600',
      certifications: [
        {
          name: 'SQL (Basic)',
          issued: '2024',
          description: 'Fundamental SQL queries and database operations',
          skills: ['SQL', 'Database Queries', 'Data Manipulation'],
          level: 'Basic'
        },
        {
          name: 'SQL (Intermediate)',
          issued: '2024',
          description: 'Advanced SQL operations including joins, subqueries, and optimization',
          skills: ['Advanced SQL', 'Query Optimization', 'Complex Joins'],
          level: 'Intermediate'
        },
        {
          name: 'Python (Basic)',
          issued: '2024',
          description: 'Python programming fundamentals and basic data structures',
          skills: ['Python', 'Data Types', 'Functions'],
          level: 'Basic'
        },
        {
          name: 'JavaScript (Basic)',
          issued: '2024',
          description: 'JavaScript fundamentals and DOM manipulation',
          skills: ['JavaScript', 'ES6+', 'DOM'],
          level: 'Basic'
        },
        {
          name: 'React (Basic)',
          issued: '2024',
          description: 'React components, state management, and hooks',
          skills: ['React', 'Components', 'State Management'],
          level: 'Basic'
        },
        {
          name: 'Node.js (Basic)',
          issued: '2024',
          description: 'Server-side JavaScript and Express.js fundamentals',
          skills: ['Node.js', 'Express.js', 'API Development'],
          level: 'Basic'
        },
        {
          name: 'CSS',
          issued: '2024',
          description: 'Styling, layout, and responsive design',
          skills: ['CSS3', 'Flexbox', 'Grid', 'Responsive Design'],
          level: 'Basic'
        },
        {
          name: 'Problem Solving (Basic)',
          issued: '2024',
          description: 'Algorithmic thinking and data structure problem solving',
          skills: ['Algorithms', 'Data Structures', 'Problem Solving'],
          level: 'Basic'
        }
      ]
    },
    {
      name: 'Cisco',
      icon: Shield,
      color: 'text-blue-600',
      certifications: [
        {
          name: 'Networking Basics',
          issued: '2024',
          description: 'Fundamental networking concepts and protocols',
          skills: ['Networking', 'TCP/IP', 'Network Protocols'],
          level: 'Basic'
        },
        {
          name: 'Python Essentials',
          issued: '2024',
          description: 'Python programming for network automation',
          skills: ['Python', 'Network Automation', 'Scripting'],
          level: 'Intermediate'
        },
        {
          name: 'CCNA: Introduction to Networks',
          issued: '2024',
          description: 'Cisco Certified Network Associate fundamentals',
          skills: ['Cisco Technologies', 'Network Configuration', 'Troubleshooting'],
          level: 'Intermediate'
        }
      ]
    },
    {
      name: 'LetsUpgrade',
      icon: Globe,
      color: 'text-purple-600',
      certifications: [
        {
          name: 'HTML Bootcamp',
          issued: '2024',
          description: 'Complete HTML5 fundamentals and semantic markup',
          skills: ['HTML5', 'Semantic HTML', 'Web Standards'],
          level: 'Basic'
        },
        {
          name: 'CSS Bootcamp',
          issued: '2024',
          description: 'Advanced CSS techniques and modern layout methods',
          skills: ['CSS3', 'Flexbox', 'Grid', 'Animations'],
          level: 'Intermediate'
        },
        {
          name: 'React Bootcamp',
          issued: '2024',
          description: 'Complete React development with hooks and context',
          skills: ['React', 'Hooks', 'Context API', 'State Management'],
          level: 'Intermediate'
        }
      ]
    },
    {
      name: 'Great Learning',
      icon: Database,
      color: 'text-orange-600',
      certifications: [
        {
          name: 'Introduction to DevOps',
          issued: '2024',
          description: 'DevOps practices, CI/CD, and cloud deployment',
          skills: ['DevOps', 'CI/CD', 'Docker', 'Cloud Deployment'],
          level: 'Intermediate'
        }
      ]
    },
    {
      name: 'Pearson MePro',
      icon: Award,
      color: 'text-red-600',
      certifications: [
        {
          name: 'Level 10 Expert',
          issued: '2024',
          description: 'Advanced proficiency in technical skills assessment',
          skills: ['Technical Assessment', 'Problem Solving', 'Critical Thinking'],
          level: 'Expert'
        }
      ]
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Basic':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'Expert':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const totalCertifications = certificationCategories.reduce(
    (total, category) => total + category.certifications.length,
    0
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
            Certifications
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and achievements in technology and programming
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">{totalCertifications}</div>
            <div className="text-muted-foreground">Total Certifications</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">{certificationCategories.length}</div>
            <div className="text-muted-foreground">Platforms</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">8</div>
            <div className="text-muted-foreground">Skills Verified</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">2024</div>
            <div className="text-muted-foreground">Active Year</div>
          </Card>
        </motion.div>

        {/* Certifications by Category */}
        <div className="space-y-12">
          {certificationCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{category.name}</h2>
                      <p className="text-muted-foreground">
                        {category.certifications.length} certifications
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.certifications.map((cert, certIndex) => (
                      <motion.div
                        key={certIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: certIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="group"
                      >
                        <Card className="h-full hover:shadow-lg transition-all duration-300">
                          <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                {cert.name}
                              </CardTitle>
                              <Badge className={getLevelColor(cert.level)}>
                                {cert.level}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{cert.issued}</span>
                            </div>
                            <CardDescription>{cert.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2 text-sm">Skills Covered:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {cert.skills.map((skill, skillIndex) => (
                                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-2 text-sm">
                                <Award className="h-4 w-4 text-primary" />
                                <span className="text-muted-foreground">Verified Certificate</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Certified Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Programming', count: 5, icon: Code },
              { name: 'Web Development', count: 6, icon: Globe },
              { name: 'Database', count: 2, icon: Database },
              { name: 'Networking', count: 3, icon: Shield }
            ].map((skillArea, index) => {
              const Icon = skillArea.icon
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
                    <h3 className="font-semibold mb-2">{skillArea.name}</h3>
                    <div className="text-2xl font-bold text-primary">{skillArea.count}</div>
                    <p className="text-sm text-muted-foreground">Certifications</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm constantly updating my skills and pursuing new certifications to stay current 
            with the latest technologies and industry best practices.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">
              Discuss My Skills
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
