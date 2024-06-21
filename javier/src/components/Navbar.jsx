
import {Link} from "react-router-dom";

const links = [
    {
        name: "home",
        href: "/home",
    },
    {
        name: "contact",
        href: "/contact",
    },
];

const Navbar = () => {
  return(
    <div>
        {links.map((x, index)=> (
          <Link key={index} to={x.href}>{x.name}</Link>
        ))}
    </div>
  );
};

export default Navbar;
