import Image from "next/image";
import adeolu from "@/assets/images/adeolu.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-60">
      <Image
        src={adeolu}
        alt="hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#1b4336] opacity-70 z-5"></div>
      <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:max-w-5xl md:max-w-3xl 2xl:max-w-7xl xl:px-52 2xl:px-56">
        <p className="pb-5 text-lg font-bold text-center md:text-base text-custorm-green md:text-left md:text-white">
          YOUR TRUSTED FINANCE PARTNER
        </p>
        <h1 className="pb-5 text-3xl font-bold text-center text-white md:leading-snug md:text-left md:text-3xl">
          Exploration and Discovery in African Financial Solutions
        </h1>
        <p className="pb-5 text-lg text-center text-white md:text-base md:text-left">
          At Wanika Investments, we drive growth through innovation, agility, and value creation, offering trusted and professional financial solutions.
        </p>
        <div className="flex flex-col gap-5 md:flex-row md:justify-start">
          <Link
            href="/contact-us"
            className="px-6 py-3 text-lg text-center text-white transition-all md:text-base bg-custorm-green rounded-3xl"
          >
            Contact Us
          </Link>

          <Link
            href="/about-us"
            className="px-6 py-3 text-lg text-center bg-white border md:text-base rounded-3xl text-custorm-green"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
