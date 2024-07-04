import Link from "next/link";

const Navbar = () => {
	return (
		<div className="flex bg-rose-500 px-4 py-2">
			<Link href={"/"} className="mr-2">
				NEXT13
			</Link>
			<Link href={"/users"}>Users</Link>
		</div>
	);
};
export default Navbar;
