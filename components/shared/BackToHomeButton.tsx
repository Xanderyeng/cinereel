import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home } from 'lucide-react'

export default function BackToHomeButton() {
  return (
    <Button variant="outline" asChild className=" self-end ">
      <Link href="/">
        <Home className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
    </Button>
  )
}