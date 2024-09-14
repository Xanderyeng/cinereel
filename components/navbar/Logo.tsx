import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <Link href="/" >
    <Image src='/spaceai_logo.webp'alt="SpaceAI Logo" 
    width={120} height={50}
    />
    </Link>
  )
}   

export default Logo