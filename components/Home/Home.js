import AboutSection from "../Sections/About/AboutSection";
import AboutMeSection from "../Sections/AboutMe/AboutMeSection";
import ExperienceSection from "../Sections/Experience/ExperienceSection";
import ProjectsSection from "../Sections/Projects/ProjectSection";
import ContactSection from "../Sections/Contact/ContactSection";

const Home = (props) => {
    const userInfo = props.userInfo;

    return (
        <div className="flex flex-col items-start tablet:items-center">
            <AboutSection username={userInfo.username}></AboutSection>
            <AboutMeSection aboutme={userInfo.aboutme} techStack={userInfo.techstack}></AboutMeSection>
            <ExperienceSection></ExperienceSection>
            <ProjectsSection></ProjectsSection>
            <ContactSection></ContactSection>
        </div>
    )
};

export default Home;