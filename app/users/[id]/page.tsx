import { notFound } from "next/navigation";

interface Props {
	params: {
		id: string;
	};
}
const UserDetailsPage = ({ params }: Props) => {
	if (params.id > "10") notFound();
	return <div>User {params.id}</div>;
};
export default UserDetailsPage;
