import AppHeader from "./AppHeader";
import Dictaphone from "../Dictaphone";

interface CookProps {}

export const Cook: React.FunctionComponent<CookProps> = (props) => {
  return (
    <div className="bg-[#1a1a1a] text-white h-screen w-full">
      <AppHeader />
      <Dictaphone />
      <img
        src={"/images/SoundWave.gif"}
        className="mx-auto absolute bottom-0"
      />
    </div>
  );
};

Cook.propTypes = {};
