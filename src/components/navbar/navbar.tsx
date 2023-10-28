import { LINKS } from "@/constants/links/links";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">My App</Link>
      <div>
        {LINKS.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
