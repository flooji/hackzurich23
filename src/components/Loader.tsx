import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoaderProps {}

export const Loader: React.FunctionComponent<LoaderProps> = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/cook');
    }, 3000); // Redirect after 3 seconds

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-[#1a1a1a] text-white h-full w-full flex flex-col justify-center items-center">
      {/* GIF centered in the middle */}
      <img src={'/images/loading_animation.gif'} className="max-w-lg mb-10"/>
      
      {/* Text at the bottom */}
      <div className="absolute bottom-16 text-center">
        <p className="text-xl">establishing mise</p>
        <p className="text-xl">en place...</p>
      </div>
    </div>
  );
};

export default Loader;
