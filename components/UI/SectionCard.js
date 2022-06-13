const SectionCard = (props) => {
    return (
        <div className="flex-grow w-full p-2 pb-24 tablet:w-3/4 tablet:p-24 items-start">
            {props.children}
        </div>
    );
};

export default SectionCard;