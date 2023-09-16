import AppHeader from "./AppHeader";
import Dictaphone from "../Dictaphone";

interface CookProps {}

export const Cook: React.FunctionComponent<CookProps> = (props) => {
  return <div className="bg-[#1a1a1a] text-white h-full w-full">
    <div className="pt-20">
      <Dictaphone/>
    </div>
    <div className="absolute bottom-0 w-screen flex justify-center">
      <img src={'/images/SoundWave.gif'} className="max-w-lg absolute bottom-0"/>
    </div>
  </div>
};

Cook.propTypes = {};