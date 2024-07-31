import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import NoodleImage from "@/assets/noodle.png";

export const Hero = () => {
  return (
    <section className="overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] pb-20 pt-8 md:pb-10 md:pt-5">
      <div className="container">
        <div className="items-center md:flex">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
              Pathway to productivity
            </h1>
            <p className="mt-6 text-xl tracking-tight text-[#010D3E]">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="mt-[30px] flex items-center gap-1">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                Learn more
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <Image
              src={cogImage}
              alt="Cog image"
              className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none lg:left-0"
            />
            <Image
              src={cylinderImage}
              width={220}
              height={220}
              alt="cylinder image"
              className="-left-32 -top-8 hidden md:absolute md:block"
            />
            <Image
              src={NoodleImage}
              width={220}
              alt="noodle image"
              className="absolute left-[448px] top-[524px] hidden rotate-[30deg] lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
