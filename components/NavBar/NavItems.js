import NavItem from "./NavItem";
import ResumeButton from "./ResumeButton";

const NavItems = () => {
    return (
        <div className="flex pr-8">
            <ul className="flex p-3">
                <NavItem hrefVal="/" item="About" idx="01"></NavItem>
                <NavItem hrefVal="/" item="Experience" idx="02"></NavItem>
                <NavItem hrefVal="/" item="Projects" idx="03"></NavItem>
                <NavItem hrefVal="/" item="Contact" idx="04"></NavItem>
            </ul>
            <ResumeButton></ResumeButton>
        </div>
    );
};

export default NavItems;