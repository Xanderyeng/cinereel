'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PersonDetailsProps {
  person: any // Replace 'any' with a proper type definition for your person data
}

export default function PersonDetails({ person }: PersonDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-8"
      >
        <div className="md:w-1/3">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Image
              src={`https://image.tmdb.org/t/p/w400/${person.profile_path}`}
              alt={person.name}
              width={500}
              height={750}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
        <div className="md:w-2/3">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {person.name}
          </motion.h1>
          <motion.p 
            className="text-xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {person.known_for_department}
          </motion.p>
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Biography</h2>
            <p>{person.biography || 'No biography available.'}</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div>
              <h3 className="font-semibold">Birthday</h3>
              <p>{person.birthday || 'Unknown'}</p>
            </div>
            <div>
              <h3 className="font-semibold">Place of Birth</h3>
              <p>{person.place_of_birth || 'Unknown'}</p>
            </div>
            {person.deathday && (
              <div>
                <h3 className="font-semibold">Died</h3>
                <p>{person.deathday}</p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6">Known For</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {person.known_for.map((work: any, index: number) => (
            <motion.div 
              key={work.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card>
                <CardContent className="p-4">
                  <Image
                    src={`https://image.tmdb.org/t/p/w200${work.poster_path}`}
                    alt={work.title || work.name}
                    width={200}
                    height={300}
                    className="rounded-md mb-2"
                  />
                  <h3 className="font-semibold text-sm truncate">{work.title || work.name}</h3>
                  <Badge>{work.media_type}</Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}