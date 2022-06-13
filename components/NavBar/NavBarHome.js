import Link from "next/link";

const NavBarHome = () => {
    return (
        <div className="flex p-3">
                <ul>
                    <li className="mx-2 text-green-200 hover:underline hover:underline-offset-8 hover:decoration-green-200">
                        <Link href="/"><a>Home</a></Link>
                    </li>
                </ul>
        </div>
    );
};

export default NavBarHome;