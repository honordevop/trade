import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Withdraw from "@/models/Withdraw";

export const GET = async (request) => {
  const url = new URL(request.url);

  // const email = url.searchParams.get("email");

  //fetch
  try {
    await connect();

    const allWithdrawals = await Withdraw.find();
    return NextResponse.json({ allWithdrawals }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Database Error1" }, { status: 500 });
  }
};
