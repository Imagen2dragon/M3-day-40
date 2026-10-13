"use server";

const PHONE_REGEX = /^(?:\+251|0)9\d{8}$/;

export async function placeOrderAction(prevState, formData) {
  const name = formData.get("name")?.trim();
  const phone = formData.get("phone")?.trim();
  const area = formData.get("area")?.trim() || "Bole";

  const errors = {};

  if (!name || name.length < 2) {
    errors.name = "Full name must be at least 2 characters.";
  }

  if (!phone || !PHONE_REGEX.test(phone)) {
    errors.phone = "Enter a valid Ethiopian phone number (09... or +2519...).";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  const orderId = `ET-${Date.now().toString().slice(-6)}`;
  console.log(`[ORDER CREATED] ID: ${orderId}, Name: ${name}, Phone: ${phone}, Area: ${area}`);

  return {
    success: true,
    orderId,
    message: `Order ${orderId} placed successfully! TeleBirr payment prompt sent to ${phone}.`
  };
}