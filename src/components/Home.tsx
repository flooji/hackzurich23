import PropTypes from "prop-types";
import AppHeader from "./AppHeader";

interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = (props) => {
  return <AppHeader />;
};

Home.propTypes = {};