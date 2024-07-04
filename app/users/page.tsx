import Link from "next/link";
import User from "./components/users";
import { Suspense } from "react";

const UsersPage = () => {
	return (
		<div className="flex flex-col gap-3 items-start">
			<h1>Users</h1>
			<Link href={"/users/new"} className="bg-yellow-300 p-4 rounded-3xl">
				New User
			</Link>

			<User />
		</div>
	);
};
export default UsersPage;
