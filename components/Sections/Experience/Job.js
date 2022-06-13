const Job = (props) => {
    return (
        <div className="p-2 mb-4">
            <h1 className="my-1 text-xl text-indigo-200 font-semibold">{props.title}
                <span className="ml-2 text-xl text-green-200 font-semibold">
                    @ {props.company}
                </span>
            </h1>
            <p className="my-1 font-dm_mono text-sm text-gray-400">{props.start} - {props.end}</p>
        </div>
    )
};

export default Job;