import { useEffect, useState } from "react";
import Heading from "../../UI/Heading";
import SectionCard from "../../UI/SectionCard";
import ProjectGrid from "./ProjectGrid";

import { Element } from "react-scroll";

const ProjectsSection = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        fetch('/api/projects', {
            method: "GET", 
            handlers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setProjectData(data.projectData);
            setIsLoading(false);
        });
    }, []);

    if (isLoading){
        return (
            <SectionCard>
            <Element name="project"></Element>
            <Heading idx="03" item="Featured Projects" id={"ProjectsSection"}></Heading>
            </SectionCard>
        );
    }

    return (
        <SectionCard>
            <Element name="project"></Element>
            <Heading idx="03" item="Featured Projects" id={"ProjectsSection"}></Heading>
            <ProjectGrid projData={projectData}></ProjectGrid>
        </SectionCard>
    );
};

export default ProjectsSection;