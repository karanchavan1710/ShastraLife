import { Button } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import OrangeButton from "../../Components/Common/Buttons/OrangeButton";

const Temples = () => {
  const navigate = useNavigate(); 
  return (
    <div className="!flex !justify-center !items-center !min-h-screen !bg-gradient-to-br !from-gray-100 !to-gray-300 !p-6">
      <div className=" !p-8 !max-w-7xl !w-full !transform !hover:scale-105 !transition !duration-500">
        {/* Header Section */}
        <div className="!flex !items-center !justify-between !mb-6">
          <h1 className="!text-3xl !font-extrabold !text-gray-800">
            Shani Shingnapur Temple
          </h1>
          <OrangeButton
            variant="contained"
            startIcon={<BiArrowBack />}
            onClick={()=>navigate('/')}
          >
            Back
          </OrangeButton>
        </div>

        {/* Temple Details */}
        <div className=" !p-4 !rounded-lg !mb-6 text-start">
          <p className="!text-lg !font-semibold !text-gray-700">
            Location: <span className="!text-red-500">Shingnapur, Maharashtra, India</span>
          </p>
          <p className="!text-lg !font-semibold !text-gray-700">
            Deity: <span className="!text-red-500">Lord Shani (Saturn)</span>
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="!w-[100%] !h-[376px] !bg-gray-300 !flex !justify-center !items-center !text-gray-700 !text-xl !mb-6 !rounded-lg !shadow-md overflow-hidden">
        <img src="https://i.ytimg.com/vi/CEjmwwLOB0Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBOzHPloH0LlbA8l0Pbm78KjsZuoA" className="w-full object-cover"  loading="lazy"/>
        </div>

        {/* Temple Description */}
        <p className="!text-lg !text-gray-600 !leading-relaxed !mb-6 text-start">
          Shani Shingnapur Temple is a famous shrine dedicated to Lord Shani. The temple is unique because the idol of Shani Dev is placed on an open platform without a roof. It is believed that Lord Shani himself protects the village, and as a result, houses in Shingnapur have no doors.
        </p>

        {/* Rituals & Beliefs */}
        <div className="!bg-orange-100 !p-6 !rounded-lg !shadow-md !mb-6 !text-start">
          <h2 className="!text-xl !font-bold !text-orange-800 !mb-4">
            Rituals & Beliefs:
          </h2>
          <ul className="!list-disc !list-inside !text-gray-700 !text-lg">
            <li>Devotees take a ritual bath before offering oil to Lord Shani.</li>
            <li>Women were historically not allowed inside the inner sanctum but now have equal access.</li>
            <li>It is believed that Lord Shani punishes those who do wrong and rewards the righteous.</li>
            <li>Shani Jayanti and Saturdays witness massive gatherings of devotees.</li>
          </ul>
        </div>

        {/* Material and Offerings */}
        <div className=" !p-4 !text-start">
          <p className="!font-semibold !text-gray-800 !text-lg">
            <span className="!text-orange-700">Offerings:</span> Mustard Oil, Black Sesame Seeds, and Flowers
          </p>
          <p className="!font-semibold !text-gray-800 !text-lg !mt-2">
            <span className="!text-orange-700">Temple Timings:</span> Open 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Temples;
