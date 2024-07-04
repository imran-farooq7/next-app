import prisma from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
	params: {
		id: string;
	};
}
export async function GET(req: NextRequest, { params }: Props) {
	if (params.id > "10") {
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	}
	return NextResponse.json({ id: 1, name: "imran" });
}
export async function PUT(req: NextRequest, { params }: Props) {
	const body = await req.json();
	const user = await prisma.user.findUnique({
		where: {
			id: params.id,
		},
	});
	if (!user) {
		return NextResponse.json("User not found", {
			status: 404,
		});
	}
	const updatedUser = await prisma.user.update({
		where: {
			id: params.id,
		},
		data: {
			name: body.name,
		},
	});
	return NextResponse.json(updatedUser, {
		status: 200,
	});
}
export async function DELETE(request: NextRequest, { params }: Props) {
	const user = await prisma.user.findUnique({
		where: {
			id: params.id,
		},
	});
	if (!user) {
		return NextResponse.json("User not found", {
			status: 404,
		});
	}
	await prisma.user.delete({
		where: {
			id: params.id,
		},
	});

	return NextResponse.json("User deleted successfully");
}
