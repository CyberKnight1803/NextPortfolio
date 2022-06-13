import NavItem from "./NavItem";
import ResumeButton from "./ResumeButton";

const NavItems = () => {

    return (
        <div className="flex pr-8">
            <ul className="flex p-3">
                <NavItem hrefVal="aboutme" item="About" idx="01"></NavItem>
                <NavItem hrefVal="experience" item="Experience" idx="02"></NavItem>
                <NavItem hrefVal="project" item="Projects" idx="03"></NavItem>
                <NavItem hrefVal="contact" item="Contact" idx="04"></NavItem>
            </ul>
            <ResumeButton></ResumeButton>
        </div>
    );
};

export default NavItems;