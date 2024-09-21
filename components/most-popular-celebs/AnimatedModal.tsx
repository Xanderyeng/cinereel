import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

import { Button } from '../ui/button'
import { Celebrity } from '@/_types/types'
import { ScrollArea } from "@/components/ui/scroll-area"
import { dialogVariants, itemVariants } from '@/_utils/animatedModalVariants';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface AnimatedDialogProps {
  celebrities: Celebrity[]
  gtmEvent: (event: { event: string, value: string }) => void
}

export default function AnimatedDialog({ celebrities, gtmEvent }: AnimatedDialogProps) {
  return (
    <AnimatePresence>
        <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => gtmEvent({ event: 'buttonClicked', value: 'See Other Partners' })}>See Other Partners</Button>
        </DialogTrigger>
        <DialogContent className=" max-w-[90vw] rounded-lg md:rounded-md sm:max-w-[425px]" aria-description='Other Partners' aria-label="Other Partners" aria-describedby="other-partners">
            <motion.div
              variants={dialogVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
             <DialogHeader>
             <DialogTitle className=" tracking-widest pb-4 text-lg font-bold capitalize">other partners</DialogTitle>
             <VisuallyHidden.Root>
             <DialogDescription>
              Other Partners
             </DialogDescription>
             </VisuallyHidden.Root>
              </DialogHeader>
              <ScrollArea className="h-[400px] pr-4">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      }
                    }
                  }}
                  aria-description='Other Partners' aria-label="Other Partners" aria-describedby="other-partners"
                >
                  {celebrities.map((celeb, index) => (
                    <motion.div
                      key={celeb.id}
                      variants={itemVariants}
                      custom={index}
                      className="flex items-center gap-4 mb-4 hover:cursor-pointer"
                      aria-label={celeb.name}
                      aria-describedby={celeb.name}
                    >
                      <div className="relative w-12 h-12 overflow-hidden rounded-full">
                        <Image
                          src={`https://image.tmdb.org/t/p/w200${celeb.profile_path}`}
                          alt={celeb.name}
                          fill
                          quality={75}
                          loading="lazy"
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <span className="font-medium">{celeb.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </ScrollArea>
            </motion.div>
        </DialogContent>
        </Dialog>
    </AnimatePresence>
  )
}