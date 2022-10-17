import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedin /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href="https://www.linkedin.com/in/pedro-henrique-fontinelles-a9139819b/"
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
