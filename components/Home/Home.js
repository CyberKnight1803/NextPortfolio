import AboutSection from "../Sections/About/AboutSection";
import AboutMeSection from "../Sections/AboutMe/AboutMeSection";
import ExperienceSection from "../Sections/Experience/ExperienceSection";
import ProjectsSection from "../Sections/Projects/ProjectSection";
import ContactSection from "../Sections/Contact/ContactSection";
import Footer from "../Footer/Footer";

const Home = (props) => {
    const userInfo = props.userInfo;

    return (
        <div className="flex flex-col items-start tablet:items-center">
            <AboutSection username={userInfo.username}></AboutSection>
            <AboutMeSection aboutme={userInfo.aboutme} techStack={userInfo.techstack}></AboutMeSection>
            <ExperienceSection></ExperienceSection>
            <ProjectsSection></ProjectsSection>
            <ContactSection></ContactSection>
            <Footer 
            showIcons={props.showIcons}
            github={userInfo.github} 
            linkedin={userInfo.linkedin} 
            twitter={userInfo.twitter}
            instagram={userInfo.instagram}
            ></Footer>
        </div>
    )
};

export default Home;