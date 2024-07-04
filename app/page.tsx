import UploadImages from "./components/UploadImages";

const getData = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users", {
		cache: "no-store",
	});
	const data = await res.json();
	return data;
};
export default async function Home() {
	// console.log(data);

	return (
		<>
			<h1>Hello Next 13</h1>
			<UploadImages />
		</>
	);
}
