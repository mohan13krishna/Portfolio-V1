'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Calendar, MapPin, Star, Award, BookOpen } from 'lucide-react'

export default function Education() {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Science Engineering',
      school: 'ACE Engineering College',
      location: 'Hyderabad, India',
      duration: 'Nov 2022 – Present',
      cgpa: '8.1',
      status: 'Current',
      description: 'Specializing in Computer Science with focus on AI, Machine Learning, and Software Engineering.',
      subjects: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Machine Learning',
        'Software Engineering',
        'Computer Networks',
        'Operating Systems',
        'Web Technologies',
        'Object-Oriented Programming'
      ],
      achievements: [
        'Consistent academic performance with 8.1 CGPA',
        'Active participation in coding competitions',
        'Member of AI/ML club',
        'Completed multiple technical projects'
      ]
    },
    {
      id: 2,
      degree: 'Intermediate (MPC - Mathematics, Physics, Chemistry)',
      school: 'Narayana Junior College',
      location: 'Hyderabad, India',
      duration: '2020 – 2022',
      cgpa: '8.57',
      status: 'Completed',
      description: 'Focused on Mathematics, Physics, and Chemistry with strong foundation in analytical thinking.',
      subjects: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'English'
      ],
      achievements: [
        'Achieved 8.57 CGPA',
        'Strong foundation in Mathematics and Physics',
        'Participated in science exhibitions',
        'Excellent problem-solving skills development'
      ]
    }
  ]

  const academicProjects = [
    {
      title: 'AI-Powered Student Assistant',
      description: 'Educational chatbot using natural language processing',
      technologies: ['Python', 'NLP', 'TensorFlow'],
      grade: 'A+'
    },
    {
      title: 'University Management System',
      description: 'Full-stack web application for academic management',
      technologies: ['React', 'Node.js', 'MongoDB'],
      grade: 'A'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for student performance analysis',
      technologies: ['Python', 'Pandas', 'Streamlit'],
      grade: 'A+'
    }
  ]

  const skills = [
    { category: 'Programming', items: ['Python', 'Java', 'C++', 'JavaScript'] },
    { category: 'Web Technologies', items: ['React', 'Node.js', 'HTML/CSS', 'MongoDB'] },
    { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Jupyter', 'Docker'] }
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
            Education
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and continuous learning in computer science and technology
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Background</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block">
                    {edu.status === 'Current' && (
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                    )}
                  </div>
                  
                  {/* Education Card */}
                  <div className="md:ml-20">
                    <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <GraduationCap className="h-5 w-5 text-primary" />
                            <CardTitle className="text-xl">{edu.degree}</CardTitle>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={edu.status === 'Current' ? 'default' : 'secondary'}>
                              {edu.status}
                            </Badge>
                            <Badge variant="outline" className="flex items-center">
                              <Star className="h-3 w-3 mr-1" />
                              {edu.cgpa} CGPA
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <BookOpen className="h-4 w-4" />
                            <span className="font-semibold text-primary">{edu.school}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        
                        <CardDescription className="text-base mt-3">
                          {edu.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Subjects */}
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center">
                              <BookOpen className="h-4 w-4 mr-1 text-primary" />
                              Key Subjects
                            </h4>
                            <div className="space-y-2">
                              {edu.subjects.map((subject, subIndex) => (
                                <div key={subIndex} className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                  <span className="text-sm">{subject}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Achievements */}
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center">
                              <Award className="h-4 w-4 mr-1 text-primary" />
                              Achievements
                            </h4>
                            <div className="space-y-2">
                              {edu.achievements.map((achievement, achIndex) => (
                                <div key={achIndex} className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                  <span className="text-sm">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Academic Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge variant="outline">{project.grade}</Badge>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Developed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills Developed</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{skillCategory.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Currently exploring advanced topics in AI/ML, cloud computing, and modern web technologies. 
            Always eager to learn and adapt to new technologies and methodologies.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline">Deep Learning</Badge>
            <Badge variant="outline">Cloud Computing</Badge>
            <Badge variant="outline">DevOps</Badge>
            <Badge variant="outline">Microservices</Badge>
            <Badge variant="outline">React Native</Badge>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
