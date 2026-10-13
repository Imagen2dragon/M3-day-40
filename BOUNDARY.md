# Addis Eats — Server & Client Boundary Placement

### Rule: "Server first, client on leaves only"

| File / Component | Environment | Justification |
| :--- | :---: | :--- |
| `app/layout.js` | **Server** | Pure HTML shell; passes children in without interactivity. |
| `app/page.js` | **Server** | Static marketing landing page; zero JavaScript shipped to client. |
| `app/menu/layout.js` | **Server** | Wraps the category navigation and menu children. |
| `app/menu/page.js` | **Server** | Directly queries `lib/dishes.js` on the server; no client `fetch` waterfall. |
| `app/menu/[id]/page.js` | **Server** | Pre-renders dish details at build time via `generateStaticParams`. |
| `components/AddToCartButton.jsx` | **Client** | Requires `onClick` event listener to write to the browser cart store. |
| `components/CategoryBar.jsx` | **Client** | Uses interactive client tabs/query string updates. |
| `components/CartBadge.jsx` | **Client** | Reads the active client-side cart count to update the header badge. |
| `app/cart/page.js` | **Client** | Renders private browser cart state with item removal and quantity updates. |
| `app/checkout/page.js` | **Client** | Renders progressive form with live validation feedback. |
| `app/actions.js` | **Server Action** | `"use server"`: Runs on the server to validate and persist orders. |

**Total Client Components:** 4 (Boundary kept strictly at the interactive leaves).