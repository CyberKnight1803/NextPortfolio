import SectionCard from "../../UI/SectionCard";
import Heading from "../../UI/Heading";
import TechStack from "./TechStack";

const AboutMeSection = (props) => {

    const techStack = Object.values(props.techStack);

    return (
        <SectionCard>
            <Heading idx={"01"} item={"About Me"}></Heading>
            <div className="flex flex-col tablet:flex tablet:flex-row items-center tablet:items-start w-full text-gray-400">
                <div className="w-full  p-4 mr-8">
                    <p className="w-full text-2xl tablet:text-base">
                    {props.aboutme}
                    </p>

                    <TechStack techStack={techStack}></TechStack>

                </div>
                <div className="w-1/2 p-4 tablet:p-4 tablet:pl-16 ml-8">
                    <img className="rounded-3xl object-contain" src="/pics/profile.png" alt="Omkar Profile PIC">
                    </img>
                </div>
            </div>
        </SectionCard>
    );
};

export default AboutMeSection;