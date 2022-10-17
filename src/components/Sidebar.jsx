import SocialNetworks from "./SocialNetworks";
import Avatar from "../img/eu.jpeg";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Pedro Fontinelles"></img>
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a
        href="https://drive.google.com/file/d/1zt4oumAKOI9T8ABJP_EWgVDtBqRgH3e9/view?usp=sharing"
        className="btn"
      >
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
