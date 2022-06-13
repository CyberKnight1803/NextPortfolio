import IconList from "./IconList";

const Footer = (props) => {

    const iconComponent = (
        <div className="flex">
            <IconList
              col={false}
              github={props.github} 
              linkedin={props.linkedin} 
              twitter={props.twitter}
              instagram={props.instagram}
            ></IconList>
        </div>
    );

    return (
        // <SectionCard>
        <footer className="ml-44 tablet:ml-0 flex flex-row  items-center justify-center p-4 tablet:pl-4">
            <div className="flex flex-col  justify-center m-6">
                {
                    !props.showIcons && iconComponent
                }
                <div className="text-center p-1">
                    <p className="font-roboto text-xs text-gray-400">Designed and Built by Omkar Pitale</p>
                </div>
                <div className="text-center p-1">
                    <p className="font-dm_mono text-xs text-gray-400">2022</p>
                </div>
            </div>
        </footer>
        // </SectionCard>
    );
};

export default Footer;