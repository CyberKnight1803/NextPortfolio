import Tech from "./Tech";

const TECH_STACK = [
    "PyTorch", 
    "TensorFlow", 
    "Keras",
    "NodeJS",
    "ReactJS", 
    "MongoDB"
]

const TechStack = (props) => {
    return (
        <div>
            <div className="mt-2 mb-4">
                <p className="text-2xl tablet:text-base">Here are a few technologies I have been working with recently - </p>
            </div>
            <div className="grid grid-cols-2 tablet:grid-rows-3 tablet:grid-flow-col tablet:gap-x-2">
                {
                    props.techStack.map(tech => {
                        return <Tech key={tech} tech={tech}></Tech>;
                    })
                }
            </div>
        </div>
    )
};

export default TechStack;