"use client"

import { GraduationCap, Briefcase, Users, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface TimelineItem {
  id: string
  type: "education" | "experience" | "organization"
  title: string
  organization: string
  duration: string
  details?: string[]
  icon: React.ReactNode
}

const timelineData: TimelineItem[] = [
  {
    id: "srm-university",
    type: "education",
    title: "B.Tech Computer Science & Engineering",
    organization: "SRM University",
    duration: "2023 - 2027",
    details: [
      "Specialization: Big Data Analytics",
      "Current CGPA: 9.69/10.0",
      "Relevant Coursework: Data Structures, Algorithms, Machine Learning, Database Systems"
    ],
    icon: <GraduationCap className="h-5 w-5" />
  },
  {
    id: "codsoft-internship",
    type: "experience",
    title: "Python Development Intern",
    organization: "CODSOFT",
    duration: "Sep 2024 - Oct 2024",
    details: [
      "Developed Python applications and automation scripts",
      "Worked on data analysis and visualization projects",
      "Collaborated with team on software development best practices"
    ],
    icon: <Briefcase className="h-5 w-5" />
  },
  {
    id: "andropedia-club",
    type: "organization",
    title: "Active Member",
    organization: "Andropedia Tech Club",
    duration: "2023 - Present",
    details: [
      "Participate in technical workshops and coding competitions",
      "Collaborate on open-source projects and hackathons",
      "Contribute to knowledge sharing sessions on emerging technologies"
    ],
    icon: <Users className="h-5 w-5" />
  }
]

const getTypeColor = (type: string) => {
  switch (type) {
    case "education":
      return "bg-accent-blue/10 text-accent-blue border-accent-blue/20"
    case "experience":
      return "bg-success/10 text-success border-success/20"
    case "organization":
      return "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20"
    default:
      return "bg-text-secondary/10 text-text-secondary border-text-secondary/20"
  }
}

const getTypeLabel = (type: string) => {
  switch (type) {
    case "education":
      return "Education"
    case "experience":
      return "Experience"
    case "organization":
      return "Organization"
    default:
      return type
  }
}

export default function EducationTimeline() {
  return (
    <div className="bg-background-dark w-full">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-display font-bold text-text-primary">
            Education & Experience
          </h2>
          <p className="text-text-secondary font-body">
            My academic journey and professional experiences
          </p>
        </div>

        <div className="relative space-y-6">
          {/* Timeline line */}
          <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-border-subtle" />

          {timelineData.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-5 h-5 bg-surface border-2 border-accent-blue rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-accent-blue rounded-full" />
              </div>

              {/* Content */}
              <div className="ml-16">
                <Card className="bg-surface border-border-subtle hover:border-accent-blue/30 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent-blue/10 rounded-lg text-accent-blue">
                          {item.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg font-display font-semibold text-text-primary">
                            {item.title}
                          </CardTitle>
                          <p className="text-text-secondary font-body text-sm mt-1">
                            {item.organization}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge 
                          variant="secondary" 
                          className={`${getTypeColor(item.type)} font-mono text-xs`}
                        >
                          {getTypeLabel(item.type)}
                        </Badge>
                        <div className="flex items-center gap-1 text-text-secondary text-sm font-mono">
                          <Calendar className="h-3 w-3" />
                          {item.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  {item.details && (
                    <>
                      <Separator className="bg-border-subtle" />
                      <CardContent className="pt-4">
                        <ul className="space-y-2">
                          {item.details.map((detail, detailIndex) => (
                            <li 
                              key={detailIndex} 
                              className="text-text-secondary font-body text-sm flex items-start gap-3"
                            >
                              <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </>
                  )}
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}