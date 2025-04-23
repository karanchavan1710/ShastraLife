import { Card } from "@mui/material";
import { FaHandsPraying } from "react-icons/fa6";
import { MdOutlineTempleHindu } from "react-icons/md";
import { GiScrollUnfurled } from "react-icons/gi";

const About = () => {
  return (
    <section className="!py-12 !px-4 md:!px-12 !bg-orange-100 !min-h-screen">
      <div className="!container !mx-auto !text-center">
        <h1 className="!text-5xl md:!text-6xl !font-extrabold !text-orange-900">
          About <span className="!text-orange-600">Shastra Life</span>
        </h1>
        <p className="!mt-4 !text-lg !text-gray-700 !max-w-3xl !mx-auto">
          Dedicated to restoring and preserving the spiritual sanctity of historic temples, Shastra Life is committed to reviving ancient traditions and making sacred places accessible to all.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="!mt-12 !grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-8">
        {/* Vision Card */}
        <Card className="!p-6 !rounded-lg !shadow-lg !bg-white !text-center !transform !transition-all !duration-300 hover:!scale-105" data-aos="fade-up">
          <MdOutlineTempleHindu size={50} className="!text-orange-600 !mx-auto" />
          <h2 className="!text-2xl !font-bold !mt-4">Our Vision</h2>
          <p className="!mt-2 !text-gray-600">
            We envision a world where temples remain true to their spiritual essence, free from commercialization, and continue to guide individuals towards enlightenment.
          </p>
        </Card>

        {/* Mission Card */}
        <Card className="!p-6 !rounded-lg !shadow-lg !bg-white !text-center !transform !transition-all !duration-300 hover:!scale-105" data-aos="fade-up" data-aos-delay="200">
          <GiScrollUnfurled size={50} className="!text-orange-600 !mx-auto" />
          <h2 className="!text-2xl !font-bold !mt-4">Our Mission</h2>
          <p className="!mt-2 !text-gray-600">
            Shastra Life aims to revive and promote ancient temple traditions, ensuring their authenticity and protecting their spiritual integrity for future generations.
          </p>
        </Card>

        {/* Engagement Card */}
        <Card className="!p-6 !rounded-lg !shadow-lg !bg-white !text-center !transform !transition-all !duration-300 hover:!scale-105" data-aos="fade-up" data-aos-delay="400">
          <FaHandsPraying size={50} className="!text-orange-600 !mx-auto" />
          <h2 className="!text-2xl !font-bold !mt-4">Engagement</h2>
          <p className="!mt-2 !text-gray-600">
            We create meaningful opportunities for devotees and practitioners to connect with temples and participate in their rich traditions.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;