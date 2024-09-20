import Meteors from "@/components/magicui/meteors";

export function ReelMeteors() {
  return (
    <div className="relative flex h-full w-full flex-col items-start justify-center overflow-hidden rounded-none border-none bg-transparent outline-none">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Cinereel
      </span>
    </div>
  );
}
