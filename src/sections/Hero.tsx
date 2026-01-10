import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Link from "next/link";
import TypingEffect from "@/components/TypingEffects";

export const HeroSection = () => {
  return (
    <div className="py-20 md:py-30 lg:py-36 relative z-0 overflow-x-clip">
      <div className="absolute pointer-events-none inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className=" size-[660px] hero-ring"></div>
        <div className=" size-[760px] hero-ring"></div>
        <div className=" size-[860px] hero-ring"></div>
        <div className=" size-[960px] hero-ring"></div>

        {/* STAR ICON */}

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={-42}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={620}
          rotation={-5}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        {/* SMALL CIRCLE */}

        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          {/* <Image
            src={logo}
            className="size-[90px] bg-gray-800"
            alt="person peaking from behind laptop"
          /> */}
          
        </div>
        <div className="max-w-lg mx-auto">
           <h1 className="font-serif text-3xl  md:text-4xl text-center mt-2 tracking-wide">
           {"Hy!!"}
          </h1>
          
          <h1 className="font-serif text-3xl  md:text-4xl text-center mt-2 tracking-wide">
           {"I'm "}
           <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">Nitesh Panday</span>
          </h1>
          <h1 className="font-serif mt-2 text-3xl  md:text-4xl text-center  tracking-wide">
            A full Stack Web App Developer
          </h1>
          <div className="rounded-md border-gray-800 px-4 py-4 flex items-center justify-center gap-3">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
         
          <p className="mt-1 p-1.5 text-center font-sans text-white/70 text-sm md:text-lg ">
                <TypingEffect/>
          </p>
        </div>

        <div className="flex flex-col   justify-center items-center mt-6 gap-3">
          <Link
            href="/projects"
            className="inline-flex text-sm items-center hover:bg-gradient-to-r from-emerald-300 to-sky-400  hover:text-black gap-2 border border-white/15 px-3 h-10 rounded-lg"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </Link>

          <Link
            href="/contact"
             className="inline-flex text-sm items-center hover:bg-gradient-to-r from-emerald-300 to-sky-400 hover:text-black gap-2 border border-white/15 px-3 h-10 rounded-lg"
          >
            {/* <span className="">👋</span> */}
            <span className="font-semibold">{"Let's Connect"}</span>
          </Link>
          
        </div>
       

      </div>
    </div>
  );
};
