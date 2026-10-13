import { NextResponse } from "next/server";

const PHONE_REGEX = /^(?:\+251|0)9\d{8}$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone } = body;

    const fieldErrors = {};

    if (!name || name.trim().length < 2) {
      fieldErrors.name = "Name must be at least 2 characters.";
    }

    if (!phone || !PHONE_REGEX.test(phone.trim())) {
      fieldErrors.phone = "Invalid Ethiopian phone number format.";
    }

    // Returns HTTP 422 if validation fails (Slide 18 requirement)
    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json({ error: "Validation failed", fieldErrors }, { status: 422 });
    }

    return NextResponse.json({
      success: true,
      orderId: `ET-${Date.now().toString().slice(-6)}`,
      message: "Order accepted"
    }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 });
  }
}