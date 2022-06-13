import Link from "next/link";

const ResumeButton = () => {
    return (
        <a className="mx-4 text-sm text-green-200 mt-1 mb-2 py-2  px-4 font-roboto border border-green-200 rounded-md hover:bg-green-100/25" href="https://drive.google.com/file/d/1ikw8eqT7JnzamDnH0MpuEYcgzcA3gAgD/view?usp=sharing" 
        target="_blank"
        rel="noreferrer"
        >
            Resume
        </a>
    );
};

export default ResumeButton;