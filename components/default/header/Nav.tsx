import Link from "next/link";
import { BsFillBagHeartFill } from "react-icons/bs";

interface Props {
  color?: string;
}

const Nav = ({ color }: Props) => {
  return (
    <nav style={color ? { color: color } : { color: "black" }}>
      <Link href="/">Shop</Link>
      <Link href="/">Projects</Link>
      <Link href="/">Contact</Link>
      {/* <BsFillBagHeartFill
        style={color ? { color: color } : { color: "black" }}
      /> */}
    </nav>
  );
};

export default Nav;
