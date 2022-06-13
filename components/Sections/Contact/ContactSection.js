import SectionCard from "../../UI/SectionCard";
import Heading from "../../UI/Heading";
import EmailSection from "./Email";

import { Element } from "react-scroll"

const ContactSection = () => {
    return (
        <SectionCard>
            <Element name="contact"></Element>
            <Heading idx="04" item="Get In Touch" id={"ContactSection"}></Heading>
            <div className="flex flex-col tablet:flex-row items-center text-center w-full">
                <div className="p-4 w-4/5 tablet:w-1/3">
                    <p className="mt-3 justify-center text-gray-400 text-2xl tablet:text-lg">
                        I am open to new oppotunities, my inbox is always open. 
                        Whether you have a question or just want to say hi, I will try
                        my best to get back to you!
                    </p>
                </div>
                <EmailSection></EmailSection>
            </div>
        </SectionCard>
    );
};

export default ContactSection;