import prisma from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const users = await prisma.user.findMany({});
	if (users) {
		return NextResponse.json(users, { status: 200 });
	}
}
export async function POST(request: NextRequest) {
	const body = await request.json();
	if (!body.name || !body.email || !body.isActive) {
		return NextResponse.json("Please provide name,email,isActive", {
			status: 400,
		});
	}
	const user = await prisma.user.create({
		data: {
			email: body.email,
			name: body.name,
			isActive: body.isActive,
		},
	});
	return NextResponse.json(user, { status: 201 });
}
