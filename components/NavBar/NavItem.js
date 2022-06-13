// import Link from "next/link";
import { Link } from "react-scroll";

const NavItem = (props) => {
    return (
        <li className="text-sm font-roboto mx-4 hover:underline hover:underline-offset-8 hover:decoration-green-200 hover:text-green-200">
            <Link to={props.hrefVal} smooth={true} duration={700}>
                    <span className="text-green-200">{props.idx}</span>
                    . {props.item}
            </Link>
        </li>
    )
};

export default NavItem;