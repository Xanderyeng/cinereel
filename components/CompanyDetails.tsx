'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

interface CompanyDetailsProps {
  company: any // Replace 'any' with a proper type definition for your company data
}

export default function CompanyDetails({ company }: CompanyDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-12"
      >
        {company.logo_path && (
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="mb-6"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w400/${company.logo_path}`}
              alt={company.name}
              width={300}
              height={150}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        )}
        <motion.h1 
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {company.name}
        </motion.h1>
        {company.origin_country && (
          <motion.p 
            className="text-xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Origin: {company.origin_country}
          </motion.p>
        )}
        {company.headquarters && (
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Headquarters: {company.headquarters}
          </motion.p>
        )}
      </motion.div>
      
      {company.description && (
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p>{company.description}</p>
        </motion.div>
      )}
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-6">Popular Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {company.movies?.slice(0, 12).map((movie: any) => (
            <motion.div 
              key={movie.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card>
                <CardContent className="p-4">
                  <Image
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    width={200}
                    height={300}
                    className="rounded-md mb-2"
                  />
                  <h3 className="font-semibold text-sm truncate">{movie.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}