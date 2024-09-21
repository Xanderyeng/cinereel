import Ripple from "@/components/magicui/ripple";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Ripple404() {
  return (
    <>
      <h1 className=" z-10 text-6xl font-bold mb-4">404</h1>
      <>
      <p className=" z-10 text-xl mb-2">Oops! We are uploading more movies and shows. </p>
      <p className=" z-10 text-xl mb-8">Kindly check again later.</p>
      </>
      <Button className="z-10" asChild>
        <Link href="/">Go back home</Link>
      </Button>
      <Ripple />
    </>
  );
}
