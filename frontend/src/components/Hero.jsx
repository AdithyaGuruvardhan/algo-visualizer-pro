import Img3d from "../assets/3dImg.png";

const Hero = () => {
  return (
    <div className="hero flex justify-center items-center h-screen">
      <img 
        src={Img3d} 
        alt="3D Graphic" 
        className="
            w-[90%]          /* default for mobile */
            sm:w-[70%]       /* small screens */
            md:w-[55%]       /* tablets */
            lg:w-[55%]       /* desktops */
            xl:w-[45%]       /* large desktops */
            object-contain
        "
    />
    </div>
  );
};

export default Hero;
