import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex h-full">
			<aside className="w-64 bg-sky-400">Sidebar</aside>
			<main>{children}</main>
		</div>
	);
};
export default DashboardLayout;
