import Img3d from "../assets/3dImg.png";

const Hero = () => {
  return (
    <div className="hero flex justify-center items-center h-screen">
      <img 
        src={Img3d} 
        alt="3D Graphic" 
        className="w-3/5 object-contain"
      />
    </div>
  );
};

export default Hero;
