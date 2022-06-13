const EmailSection = () => {
    return (
        <div className="flex flex-col items-center justify-center p-2 m-2 w-full tablet:w-4/5">
            <form className="flex flex-col items-center justify-center p-2 w-full">
                <div className="w-3/4 tablet:w-4/5">
                    <input 
                    type="email" 
                    placeholder="Email"
                    className="px-8 py-6 tablet:py-3 tablet:px-5 m-2 w-full bg-[#182543] border-none rounded-2xl tablet:rounded-lg
                    placeholder:text-gray-500 placeholder:text-2xl tablet:placeholder:text-base
                    outline-none
                    ">
                    </input>
                </div>
                <div className="w-3/4 tablet:w-4/5">
                    <textarea 
                    placeholder="Enter your message"
                    className="py-3 px-5 m-2 resize-none text-gray-500 w-full bg-[#182543] rounded-2xl tablet:rounded-lg h-56
                    text-gray-400
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