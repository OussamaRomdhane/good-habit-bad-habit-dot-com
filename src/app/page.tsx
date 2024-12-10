import Image from "next/image";

import { Logo } from "@/components";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="h-1/5 w-full">
          <Logo />
        </div>
        <Image
          height={1920}
          width={1536}
          objectFit="scale-down"
          src="/3-phones.png"
          alt="Three screenshots of the GoodHabitBadHabit app"
          className="h-4/5 w-full top-0 left-0 object-scale-down"
        />
        <a
          href="https://play.google.com/store/apps/details?id=com.eiilo.goodhabitbadhabit"
          target="_blank"
          className="inline-block"
        >
          <Image
            src="/get-it-google-play.png"
            alt="Get it on Google Play"
            objectFit="scale-down"
            width={270}
            height={80}
            className="hover:opacity-70"
          />
        </a>
      </div>
      <div className="slide-left flex flex-col justify-center items-center w-full h-full mt-8 sm:mt-20 mb-8 sm:mb-20">
        <Image
          height={1920}
          width={1536}
          objectFit="scale-down"
          src="/top.png"
          alt="Three screenshots of the GoodHabitBadHabit app"
          className="h-4/5 w-full top-0 left-0 object-scale-down"
        />
        <div className="h-1/5 w-full flex flex-col items-center justify-center">
          <h2 className="text-2xl">Track your habits and stay consistent</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-1 mt-8 sm:mt-20 mb-8 sm:mb-20"></div>
      <div className="slide-right flex flex-col justify-center items-center w-full h-full mt-8 sm:mt-20 mb-8 sm:mb-20">
        <Image
          height={1920}
          width={1536}
          objectFit="scale-down"
          src="/bottom.png"
          alt="Three screenshots of the GoodHabitBadHabit app"
          className="h-4/5 w-full top-0 left-0 object-scale-down"
        />
        <div className="h-1/5 w-full flex flex-col items-center justify-center">
          <h2 className="text-2xl">
            Track not only progress on good habits but also on bad ones!
          </h2>
        </div>
      </div>
      <div className="slide-left flex flex-col justify-center items-center w-full h-full mt-8 sm:mt-20 mb-8 sm:mb-20">
        <Image
          height={1920}
          width={1536}
          objectFit="scale-down"
          src="/3-phones-arc.png"
          alt="Three screenshots of the GoodHabitBadHabit app"
          className="h-4/5 w-full top-0 left-0 object-scale-down"
        />
        <div className="h-1/5 w-full flex flex-col items-center justify-center">
          <h2 className="text-2xl">
            Very simple to use! No data leaves your phone!
          </h2>
        </div>
      </div>
    </>
  );
}
