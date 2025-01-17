import Image from "next/image";
import Link from "next/link";
import mopane19 from "@/assets/images/coporateMan.jpg";

const AboutUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="flex justify-center">
        <div className="grid items-center px-2 md:gap-16 md:grid-cols-2 md:px-8 lg:px-16 xl:px-52 2xl:px-65">
          <div className="flex justify-center">
            <Image
              className="object-cover rounded-lg"
              src={mopane19}
              width={600}
              height={500}
              alt="Mopane Capital Ventures"
            />
          </div>
          <div className="md:max-w-2xl">
            <p className="pt-5 pb-5 text-base font-bold text-custorm-green md:pt-0">WHO WE ARE</p>
            <h2 className="pb-5 text-2xl font-bold text-custorm-green text-custorm-black">
              Capital Raising Experts With Global Reach
            </h2>
            <p className="p-4 pb-5 text-base italic border-l-4 bg-custorm-gray border-custorm-green text-custorm-black">
              Specializing in capital raising and structured finance, we connect investors with high-return opportunities in Africa’s dynamic sectors.
            </p>
            <p className="pt-5 pb-5 text-lg text-black md:text-base">
              Partnering with Mopane Consultancy Services, we provide comprehensive due diligence, risk management, and legal structuring to enhance our capital raising efforts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
