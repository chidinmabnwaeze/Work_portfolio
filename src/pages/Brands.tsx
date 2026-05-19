import make from "../assets/logo/cropped-LOGO-removebg-preview-42x33.png";
import bayzel from "../assets/logo/bayzel-cropped-logo.png";
import navecrest from "../assets/logo/navecrest.png";

const Brands = () => {
  const brands = [
    {
      name: "Make Maker",
      logo: make,
    },
    {
      name: "Bayzel",
      logo: bayzel,
    },
    {
      name: "Navecrest",
      logo: navecrest,
    },
  ];

  // Duplicate brands for seamless infinite scroll
  const loopedBrands = [...brands, ...brands, ...brands];

  return (
    <section id="brands" className="py-16 bg-gray-50 overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-gray-500">
          Some of the brands I've had the pleasure to work with
        </p>
        <h1 className="font-bold text-4xl mt-2">Brands</h1>
      </div>

      {/* viewport */}
      <div className="relative overflow-hidden w-full">
        {/* track */}
        <div className="flex w-max animate-marquee gap-16">
          {loopedBrands.map((brand, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center min-w-[180px]"
            >
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <span className="mt-4 text-gray-700 font-medium">
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
