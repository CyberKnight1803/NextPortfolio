import SectionCard from "../../UI/SectionCard";
import Heading from "../../UI/Heading";
import TechStack from "./TechStack";

import { Element } from "react-scroll"

const AboutMeSection = (props) => {

    const techStack = Object.values(props.techStack);

    return (
        <SectionCard>
            <Element name="aboutme"></Element>
            <Heading idx={"01"} item={"About Me"} id={"AboutMeSection"}></Heading>
            <div className="flex flex-col tablet:flex tablet:flex-row items-center tablet:items-start w-full text-gray-400">
                <div className="w-full  pl-10 tablet:pl-4 p-4 mr-8">
                    <p className="w-full text-2xl tablet:text-base">
                    {props.aboutme}
                    </p>

                    <TechStack techStack={techStack}></TechStack>

                </div>
                <div className="grid grid-cols-6 relative w-3/4 tablet:mr-0 tablet:w-3/4 p-4 tablet:p-4 tablet:pl-16 ml-8 relative">
                    <img className="row-span-full col-start-1 col-span-4 rounded-3xl object-contain z-10" src="/pics/profile.png" alt="Omkar Profile PIC">
                    </img>
                    <div className="row-span-full col-start-2 col-span-5 w-4/5 pl-8 p-4 mt-12 h-2/3 tablet:h-full tablet:mt-8 border-green-200 border-4 rounded-2xl ">

                    </div>
                </div>
            </div>
        </SectionCard>
    );
};

export default AboutMeSection;