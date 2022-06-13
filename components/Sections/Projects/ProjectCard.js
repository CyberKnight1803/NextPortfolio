import { FiGithub, FiLink2 } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";


const ProjectCard = (props) => {

    const link = (
        <a href={props.deployedLink} className="mr-8 tablet:mr-4">
            <FiLink2 className="text-4xl tablet:text-2xl text-gray-400 hover:text-green-200"/>
        </a>
    );

    return (
        <div className="bg-[#131e37] rounded-3xl tablet:rounded-xl shadow-xl p-2 my-8 mr-8 tablet:m-1 tablet:w-full tablet: h-full">
            <div className="flex justify-between p-2 p-2 m-4">
                <div className="ml-2">
                    <FontAwesomeIcon icon={faFolder} className="text-5xl tablet:text-3xl text-green-200"/>
                </div>
                <div className="flex mr-2">
                    {props.isDeployed && link}
                    <a href={props.github}>
                        <FiGithub className="text-4xl tablet:text-2xl text-gray-400 hover:text-green-200"></FiGithub>
                    </a>
                </div>
            </div>
            <div className="flex flex-col p-2 m-4 justify-between">
                <div className="mb-16">
                    <div className="mb-4">
                        <h1 className="text-3xl tablet:text-xl text-indigo-100 font-bold hover:text-green-200">{props.title}</h1>
                    </div>
                    <div className="text-2xl tablet:text-base text-cyan-200 mb-2 h-16">
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className="flex ">
                    {
                        props.techStack.map((tech, idx) => {
                            return <p key={idx} className="text-gray-500 font-roboto text-xl tablet:text-xs mr-4">{tech}</p>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;