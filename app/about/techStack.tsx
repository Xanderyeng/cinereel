"use client"

import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer, SiShadcnui } from 'react-icons/si'

const techStack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Shadcn/UI", icon: SiShadcnui },
]

export function TechStack() {

  return (
    <div className="flex flex-col items-center justify-center">
        <motion.h2 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold mb-6"
      >
        Technology Stack
      </motion.h2>
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className=' hover:cursor-pointer'
          >
            <Badge variant="secondary" className="text-lg py-2 px-4 flex items-center gap-2">
              <tech.icon size={24} />
              {tech.name}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  )
}