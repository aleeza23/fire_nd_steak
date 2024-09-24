import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full ms-10 text-white flex flex-col xl:-mt-40 mt-0 text-4xl md:text-2xl ">
            <Link href="/" className="no-underline  font-bold font-pirata-one mb-2 tracking-widest hover:text-yellow-300 ">Home</Link>
            <Link href="/about" className="no-underline  font-bold font-pirata-one mb-2 tracking-widest hover:text-yellow-300 ">About</Link>
            <Link href="/menu" className="no-underline  font-bold font-pirata-one mb-2 tracking-widest hover:text-yellow-300 ">Menu</Link>
        </div>
    );
};

export default Navbar;
