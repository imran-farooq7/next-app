"use client";

import { useRouter } from "next/navigation";

const NewUser = () => {
	const router = useRouter();
	return (
		<div>
			<button
				className="bg-red-500 p-4 rounded-3xl"
				onClick={() => router.push("/users")}
			>
				Create User
			</button>
		</div>
	);
};
export default NewUser;
