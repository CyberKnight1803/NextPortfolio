const AboutSection = (props) => {
    return (
        <div className="flex-grow  
        w-full p-2 items-center mb-12 tablet:m-0 tablet:p-24 tablet:items-start tablet:w-3/4 
        ">
            <div className="m-1 tablet:m-4">
                <p className="font-roboto text-green-200 pl-1
                text-2xl tablet:text-xl
                ">Hi, my name is</p>
            </div>
            <div className="mx-1 my-4 tablet:m-4 w-full">
                <h1 className="mb-4 font-archia_bold text-sky-200
                    text-6xl tablet:text-7xl 
                ">{props.username}.</h1>
                <h1 className="mb-4 font-archia_bold text-sky-500
                text-4xl tablet:text-5xl
                ">Machine Learning and Web Dev Enthusiast !</h1>
            </div>
            <div className="mx-1 my-4 tablet:m-4 text-gray-400
                text-base tablet:text-xl
            ">
                <p>Undergrad Computer Science Student at BITS Hyd. </p>
            </div>
        </div>
    );
};

export default AboutSection;