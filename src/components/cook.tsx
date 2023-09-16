import AppHeader from "./AppHeader";
import Dictaphone from "../Dictaphone";

interface CookProps {}

export const Cook: React.FunctionComponent<CookProps> = (props) => {
  return <div className="bg-gray-900 text-white h-screen w-full">
    <AppHeader />
    <Dictaphone />
  </div>
};

Cook.propTypes = {};