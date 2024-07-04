const User = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await res.json();
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user: any) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default User;
