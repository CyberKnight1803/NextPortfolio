
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
    let iconClass = "px-3 mx-2 mb-4";
    if (props.col){
        iconClass = "pb-6";
    } 

    return (
        <li className={iconClass}>
            <a href={props.hrefVal} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={props.icon} className="text-gray-400 hover:text-green-200 cursor-pointer text-4xl tablet:text-xl"></FontAwesomeIcon>
            </a>
        </li>
    )
};

export default Icon;