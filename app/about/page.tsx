import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { ClassicRetroGrid } from "@/components/ClassicRetroGrid"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { TechStack } from './techStack'

export default function AboutPage() {
  return (
    <>
    <section className="container relative mx-auto px-4 py-14">
      <div className=" relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
        <div className='relative z-10'>
        <h1 className="text-4xl font-bold mb-8 text-center">About Cinereel</h1>
          <p className="text-lg mb-4">
           I aim to create an immersive and user-friendly experience that brings the world of cinema and television to your fingertips. A simple platform to discover, explore, and keep track of your favorite content.
          </p>
          <p className="text-lg">
            Whether you're a casual viewer or a die-hard fan, Cinereel offers a wealth of information and features to enhance your entertainment journey.
          </p>
        </div>
        <div className="relative h-full">
         
        </div>
      </div>
        <section className='relative z-10'>
          <TechStack />
        </section>

      <h2 className="text-3xl font-semibold mb-6">Key Features</h2>      
      <div className=" relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          { title: "Extensive Database", description: "Access a vast collection of movies and TV shows, complete with detailed information and ratings." },
          { title: "Personalized Recommendations", description: "Discover new content tailored to your preferences and viewing history." }
        ].map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className=' relative z-10 text-3xl font-semibold mb-6'>Coming soon features</h2>
      <div className=' relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
        {[
          { title: "Advanced Search", description: "Use advanced search filters to find exactly what you're looking for." },
          { title: "User Profiles", description: "Create personalized profiles for different users in your household." },
          { title: "Real-Time Updates", description: "Get real-time updates on new releases, trending content, and personalized recommendations." },
          { title: "User Reviews", description: "Read and contribute user reviews to help others make informed viewing decisions." },
          { title: "Watchlist", description: "Create and manage your personal watchlist to keep track of content you want to see." },
        ].map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
     

      <div className=" relative z-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get Involved</h2>
        <p className="text-lg mb-6">
          I am continuously looking for ways to improve Cinereel. If you have any suggestions, feedback, or would like to contribute to my project, I'd love to hear from you!
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/contact">Say Hello</Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/xanderyeng/nextflix" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
      <div className='absolute z-0 top-0 left-0 w-full h-full'>
        <ClassicRetroGrid />
      </div>
      </>
  )
}