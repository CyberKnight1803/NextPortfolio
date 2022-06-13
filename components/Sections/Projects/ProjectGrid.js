import ProjectCard from "./ProjectCard";

const PROJECTS = [
    {
        title: "ParCSE", 
        github: "https://github.com/CyberKnight1803/ParCSE", 
        description: "Building a constrastive learning Framework for generating neural sentence embeddings using paraphrase as anchor target pairs.", 
        techStack: ["PyTorch", "WB"]
    },
    {
        title: "Ghost", 
        github: "", 
        description: "Building a constrastive learning Framework for generating neural sentence embeddings using paraphrase as anchor target pairs.", 
        techStack: ["C++"]
    },
    {
        title: "MLang", 
        github: "", 
        description: "Building a constrastive learning Framework for generating neural sentence embeddings using paraphrase as anchor target pairs.", 
        techStack: ["PyTorch", "WB"]
    }, 
    {
        title: "Portfolio", 
        github: "", 
        description: "Building a constrastive learning Framework for generating neural sentence embeddings using paraphrase as anchor target pairs.", 
        techStack: ["ReactJS", "MongoDB"]
    }
];

const ProjectGrid = (props) => {

    return (
        <div className="flex flex-col items-center tablet:grid tablet:grid-cols-3 tablet:gap-6 tablet:grid-flow-row">
            {
                props.projData.map(project => {
                    return <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        github={project.github}
                        techStack={project.techstack}
                        deployedLink={project.deployedLink}
                        isDeployed={project.isDeployed}
                    ></ProjectCard>;
                })
            }
        </div>
    );
};

export default ProjectGrid;