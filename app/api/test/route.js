import { connectDB } from "@/lib/databaseConnection";
import { NextResponse } from "next/server";

export async function GET(request) {
    await connectDB();
    return NextResponse.json({ message: "Database connected" }, { status: 200 });

}

