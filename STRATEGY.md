# Addis Eats — Rendering Strategy per Route

| Route | Strategy | Justification |
| :--- | :---: | :--- |
| `/` | **Static (`○`)** | Content is identical for all visitors; built once at build time. |
| `/menu` | **ISR (`3600s`)** | Dishes change a few times a day; cached globally and revalidated hourly without rebuilds. |
| `/menu/[id]` | **SSG via params (`●`)** | All dish IDs are known in advance; pre-rendered using `generateStaticParams`. |
| `/cart` | **Client (`λ` / Client)** | Cart contents are private to the user's browser tab and never touch the server until checkout. |
| `/checkout` | **Dynamic (`λ`)** | Processes live server actions, form submissions, and user session validation. |
| `/api/dishes` | **Route Handler** | Public JSON endpoint for external clients, mobile apps, or status polling. |
| `/api/orders` | **Route Handler** | Validated POST endpoint returning HTTP 201 on success and HTTP 422 on bad inputs. |