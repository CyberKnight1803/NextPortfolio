const Heading = (props) => {
    return (
        <div className="flex mb-8 items-center">
            <p className="text-green-200 text-3xl tablet:text-xl font-roboto pr-6 tablet:px-2 py-1">{props.idx}.</p>
            <h1 className="text-4xl tablet:text-2xl font-bold pr-2 text-indigo-100">{props.item}</h1>
            <div className="flex-1 tablet:flex-none border-gray-500 border-t-[1px] w-96 m-4 h-0"></div>
        </div>
    )
};

export default Heading;