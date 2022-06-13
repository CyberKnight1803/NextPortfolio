const Company = (props) => {

    const clickHandler = () => {
        props.onClick();
    };

    let className = "cursor-pointer border-l-2 border-gray-500 font-roboto text-sm p-2 hover:bg-slate-800 hover:text-green-200 transition easy-in";
    if (props.isActive)
        className = "cursor-pointer border-l-2 border-green-200 font-roboto text-sm p-2 bg-slate-800 text-green-200";

    return (
        <div key={props.company} className={className} onClick={clickHandler}>
            <p className="m-1 ml-2">{props.company}</p>
        </div>
    );
};

export default Company;