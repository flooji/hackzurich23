import AppHeader from "./AppHeader";
import Dictaphone from "../Dictaphone";
import {Link} from "react-router-dom";

interface CookProps {
}

export const Cook: React.FunctionComponent<CookProps> = (props) => {
    return (
        <div className="bg-[#1a1a1a] text-white h-full w-full">
            <Dictaphone />
        </div>
    );
};

Cook.propTypes = {};
