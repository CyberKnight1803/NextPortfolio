import Icon from "./Icon";
import { faGithub, faLinkedinIn, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";


const IconList = (props) => {
    let iconListClass = "flex items-center justify-center w-full";
    if (props.col){
        iconListClass = "flex flex-col items-center";
    }

    return (
        <ul className={iconListClass}>
            <Icon icon={faGithub} hrefVal={props.github} col={props.col}></Icon>
            <Icon icon={faLinkedinIn} hrefVal={props.linkedin} col={props.col}></Icon>
            <Icon icon={faTwitter} hrefVal={props.twitter} col={props.col}></Icon>
            <Icon icon={faInstagram} hrefVal={props.instagram} col={props.col}></Icon>
        </ul>
    );
};

export default IconList;