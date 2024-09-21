import Meteors from "@/components/magicui/meteors";

export function ReelMeteors() {
  return (
    <div className="relative flex h-full w-full flex-col md:items-start justify-center overflow-hidden rounded-none border-none bg-background outline-none">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap md:bg-gradient-to-b md:from-black md:to-gray-300/80 md:bg-clip-text text-center text-6xl md:text-8xl font-semibold leading-none text-gray-950 dark:text-gray-50 md:text-transparent dark:from-white dark:to-slate-900/10">
        Cinereel
      </span>
    </div>
  );
}
