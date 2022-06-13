import Icon from "./Icon";
import { faGithub, faLinkedinIn, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";


const IconList = (props) => {
    return (
        <ul className="flex-col items-center">
            <Icon icon={faGithub} hrefVal={props.github}></Icon>
            <Icon icon={faLinkedinIn} hrefVal={props.linkedin}></Icon>
            <Icon icon={faTwitter} hrefVal={props.twitter}></Icon>
            <Icon icon={faInstagram} hrefVal={props.instagram}></Icon>
        </ul>
    );
};

export default IconList;