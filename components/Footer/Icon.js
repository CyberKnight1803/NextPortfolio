import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
    return (
        <li className="pb-6">
            <a href={props.hrefVal} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={props.icon} className="text-gray-400 hover:text-green-200 cursor-pointer text-xl"></FontAwesomeIcon>
            </a>
        </li>
    )
};

export default Icon;