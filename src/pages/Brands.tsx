import make from "../assets/logo/cropped-LOGO-removebg-preview-42x33.png";
import bayzel from "../assets/logo/bayzel-cropped-logo.webp";
import navecrest from "../assets/logo/navecrest.webp";
import innov8 from "../assets/logo/cropped-Innov8-LOGO.webp";
import skillg from "../assets/logo/Skill-G-logo.png";
import ifair from "../assets/logo/I-FAIR-LOGO-White-Border-320.webp";
import communiti from "../assets/logo/Communiti-by-Innov8-Logo.webp";

const Brands = () => {
  const brands = [
    {
      name: "Make Maker",
      logo: make,
    },
    {
      name: "Bayzel Integrated Services",
      logo: bayzel,
    },
    {
      name: "Navecrest",
      logo: navecrest,
    },
      {
      name: "Innov8 Hub",
      logo: innov8,
    },
      {
      name: "Skill G Group",
      logo: skillg,
    },
      {
      name: "i-Fair Nigeria",
      logo: ifair,
    },
      {
      name: "Communiti by Innov8",
      logo: communiti,
    },
  ];

  // Duplicate brands for seamless infinite scroll
  const loopedBrands = [...brands, ...brands, ...brands];

  return (
    <section id="brands" className="py-16 bg-gray-50 overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-gray-500 px-4">
          Some of the brands I've had the pleasure to work with
        </p>
        <h1 className="font-bold text-4xl mt-2">Brands</h1>
      </div>

      {/* viewport */}
      <div className="relative overflow-hidden w-full">
        {/* track */}
        <div className="flex w-max animate-marquee gap-8 pr-8 md:gap-16 md:pr-16">
          {loopedBrands.map((brand, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-36 md:w-44"
            >
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  decoding="async"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <span className="mt-4 text-center text-sm md:text-base text-gray-700 font-medium">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
