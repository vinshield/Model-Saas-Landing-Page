import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="pyramid image"
            className="absolute -right-36 -top-32 hidden md:block"
            height={262}
            width={262}
          />
          <Image
            src={tubeImage}
            alt="tube image"
            className="absolute -left-36 bottom-24 hidden md:block"
            height={262}
          />
        </div>
      </div>
    </section>
  );
};
