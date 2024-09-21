import { Ripple404 } from '@/components/404Ripple'

export default function NotFound() {
  return (
    <>
    <div className="flex flex-col items-center justify-center relative z-5 min-h-[70dvh] text-center">
      <div className="absolute z-0 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[40%] flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-none border-none bg-background md:shadow-none">
      <Ripple404 />
      </div>
    </div>
      </>
  )
}