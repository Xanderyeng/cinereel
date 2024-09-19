import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2 className="w-16 h-16 animate-spin text-primary" />
    </div>
  )
}