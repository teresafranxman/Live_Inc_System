import LiveIncLogo from "../../../assets/LiveIncLogo.svg";
import { DisplayLinks } from "./DisplayLinks";

export const Footer = () => {
  return (
    <footer>
      <img src={LiveIncLogo} alt="Live Inc." style={{ height: "40px" }} />
      <DisplayLinks />
    </footer>
  );
};
