import { DisplayLinks } from "./DisplayLinks";
import { LiveIncLogo } from "../../../assets";

export const Footer = () => {
    return (
        <footer>
            <img src={LiveIncLogo} alt="Live Inc." style={{ height: '40px' }} />
            <DisplayLinks />
        </footer>
    );
};