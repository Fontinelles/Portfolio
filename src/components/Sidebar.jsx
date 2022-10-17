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
        href="https://api8w.ilovepdf.com/v1/download/22x3dAyfpp1ktlqd043smw5s63rpmAxyq022ht4xvzpgAy76l95zr5vm6yw27mAvbzc5t2j43681db9Atn8xgAs794097vt4m3661bytzs54hprcc4znfmcsyx825z6dl83hAr1yk8y8kfldj5zcy1nn68mm15j7nqbg0ks8sApp8Aqr89fq"
        className="btn"
      >
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
