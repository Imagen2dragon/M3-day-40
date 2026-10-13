"use client";

import { useFormState } from "react-dom";
import { placeOrderAction } from "@/app/actions";
import { useCartStore } from "@/lib/cartStore";

export default function CheckoutPage() {
  const [state, formAction] = useFormState(placeOrderAction, { success: false, errors: {} });
  const items = useCartStore(s => s.items);
  const total = useCartStore(s => s.items.reduce((sum, i) => sum + i.price * i.qty, 0));
  const clear = useCartStore(s => s.clear);

  if (state.success) {
    return (
      <div className="card" style={{ textAlign: "center", padding: "40px" }}>
        <h2>🎉 Order Confirmed!</h2>
        <p style={{ margin: "14px 0" }}>{state.message}</p>
        <button type="button" className="btn-primary" onClick={() => { clear(); window.location.href = "/"; }}>
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="card" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>TeleBirr Checkout</h2>
      <p style={{ margin: "8px 0 16px", color: "var(--muted)" }}>
        Order total: <strong>{total} ETB</strong> ({items.length} items)
      </p>

      <form action={formAction} className="checkout-form">
        <label>
          Full Name
          <input type="text" name="name" placeholder="Almaz Bekele" required />
          {state.errors?.name && <span className="field-err">{state.errors.name}</span>}
        </label>

        <label>
          TeleBirr Phone
          <input type="tel" name="phone" placeholder="0912345678" required />
          {state.errors?.phone && <span className="field-err">{state.errors.phone}</span>}
        </label>

        <button type="submit" className="btn-primary" style={{ marginTop: "12px" }} disabled={total === 0}>
          Confirm &amp; Place Order
        </button>
      </form>
    </div>
  );
}