import { useState, useEffect } from "react";
import SectionCard from "../../UI/SectionCard";

import Heading from "../../UI/Heading";
import Company from "./Company";
import Job from "./Job";
import JobDesc from "./JobDesc";

import { Element } from "react-scroll";

const ExperienceSection = (props) => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [expData, setExpData] = useState(null);
    const [isActive, setIsActive] = useState([]);
    const [activeJob, setActiveJob] = useState({});
    
    useEffect(() => {
        fetch('/api/experience', {
            method: 'GET', 
            headers: {
                'Content-Type': 'applications/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setExpData(data.expData);    
            setIsLoading(false);     
            const initialActiveState = new Array(data.expData.length).fill(false);
            initialActiveState[0] = true;
            setIsActive(initialActiveState);
            setActiveJob(data.expData[0]);          
        });
    }, []);



    
    const displayHandler = (id) => {
        const isActiveState = new Array(expData.length).fill(false);
        isActiveState[id] = true;
        setIsActive(isActiveState);
        setActiveJob(expData[id]);
    };

    if(isLoading){
        return (
            <SectionCard>
                <Element name="experience"></Element>
                <Heading idx="02" item="Experience" id={"ExperienceSection"}></Heading>
            </SectionCard>
        );
    }

    return (
        <SectionCard>
            <Element name="experience"></Element>
            <Heading idx="02" item="Experience" id={"ExperienceSection"}></Heading>
            <div className="flex">
                <div className="flex-col px-2">{
                    expData.map((exp, idx) => {
                        return <Company key={idx} company={exp.companySF} onClick={() => displayHandler(idx)} isActive={isActive[idx]}></Company>;
                    })
                }
                </div>
                <div className="flex-col px-4 h-80 w-4/5">
                    <Job title={activeJob.jobTitle} 
                    company={activeJob.companyLF}
                    start={activeJob.startDate}
                    end={activeJob.endDate}
                    >
                    </Job>
                    <JobDesc description={activeJob.jobDescription}></JobDesc>
                </div>
            </div>
        </SectionCard>
    );
};

export default ExperienceSection; 
