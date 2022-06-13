
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Tech = (props) => {
    return (
        <div className="flex mb-3 items-center">
            <FontAwesomeIcon icon={faCaretRight} className="mr-4 text-green-200"></FontAwesomeIcon>
            <p className="text-2xl tablet:text-sm text-gray-400 font-roboto">{props.tech}</p>
        </div>
    )
};

export default Tech;