import { SelectUser, users } from "@/db/schema";
import db from "@/db/drizzle";
import { or, like, inArray } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { query: string; tags: string } }
) {
    let results = await db.query.users.findMany({
        columns: {
            id: true,
            access: true,
            firstname: true,
            lastname: true,
            email: true,
        },

    });


    return Response.json({
        results: results,
    });
}
