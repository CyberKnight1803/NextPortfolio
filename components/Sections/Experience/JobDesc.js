import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const JobDesc = (props) => {
    const jobDescription = Object.values(props.description);

    return (
        <div className="flex-col w-2/3">
            {
                jobDescription.map((point, idx) => {
                    return <div key={idx} className="flex p-1 mb-1">
                            <FontAwesomeIcon icon={faCaretRight} className="mr-4 mt-1 text-green-200"></FontAwesomeIcon>
                            <p className="text-md text-gray-400">{point}</p>
                        </div>;
               })
            }
        </div>
    )
};

export default JobDesc;