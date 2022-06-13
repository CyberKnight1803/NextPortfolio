import Icon from "./Icon";
import { faGithub, faLinkedinIn, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";


const IconList = () => {
    return (
        <ul className="flex-col items-center">
            <Icon icon={faGithub} hrefVal={"https://github.com/CyberKnight1803"}></Icon>
            <Icon icon={faLinkedinIn} hrefVal="/"></Icon>
            <Icon icon={faTwitter} hrefVal="/"></Icon>
            <Icon icon={faInstagram} hrefVal="/"></Icon>
        </ul>
    );
};

export default IconList;