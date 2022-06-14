import { useState } from "react";

const EmailSection = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const emailData = {
            email: event.target[0].value, 
            message: event.target[1].value
        };

        fetch('/api/email', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailData)
        })
        .then(res => {
            if (res.status === 200){
                setEmail("");
                setMessage("");
            }
        });
    };

    return (
        <div className="flex flex-col items-center justify-center p-2 m-2 w-full tablet:w-4/5">
            <form 
                className="flex flex-col items-center justify-center p-2 w-full"
                method="POST"
                onSubmit={onSubmitHandler}
            >
                <div className="w-3/4 tablet:w-4/5">
                    <input 
                    name="email"
                    id="email"
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none px-8 py-6 tablet:py-3 tablet:px-5 m-2 w-full bg-[#182543] border-none rounded-2xl tablet:rounded-lg
                    placeholder:text-gray-500 placeholder:text-2xl tablet:placeholder:text-base
                    outline-none
                    ">
                    </input>
                </div>
                <div className="w-3/4 tablet:w-4/5">
                    <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    className="py-3 px-5 m-2 resize-none w-full bg-[#182543] rounded-2xl tablet:rounded-lg h-56
                    placeholder:text-gray-500 placeholder:text-2xl tablet:placeholder:text-base
                    outline-none
                    ">
                    </textarea>
                </div>
                <button
                type="submit"
                className="px-24 m-2 py-5 tablet:py-3 tablet:px-5 tablet:m-2 bg-indigo-600 rounded-2xl tablet:rounded-xl hover:bg-indigo-500">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default EmailSection;