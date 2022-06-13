import Link from "next/link";

const NavItem = (props) => {
    return (
        <li className="text-sm font-roboto mx-4 hover:underline hover:underline-offset-8 hover:decoration-green-200 hover:text-green-200">
            <Link href={props.hrefVal}>
                <a>
                    <span className="text-green-200">{props.idx}</span>
                    . {props.item}
                </a>
            </Link>
        </li>
    )
};

export default NavItem;