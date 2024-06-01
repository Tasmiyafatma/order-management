# Order Management Dashboard

This project is an Order Management Dashboard built using Vite, React, Chakra UI, and TanStack Query (React Query). It provides a user-friendly interface for managing product information, sale orders, and customer details. The dashboard is responsive, ensuring optimal viewing experience across various devices.

## Description

The Order Management Dashboard is a comprehensive tool designed to streamline the process of managing product inventories and sale orders. Featuring tabs for active and completed sale orders, it provides a centralized platform for efficient order management. Users can track product details, create new orders, and view order statuses seamlessly. The dashboard offers real-time insights, empowering businesses to make informed decisions. This project demonstrates the use of React with Chakra UI for building a modern, interactive web application, and TanStack Query for managing server state efficiently.

## How to Run the Project

To run the project locally after cloning it from GitHub, follow these instructions:

1. **Clone the Repository:**

- [Order Management](https://github.com/Tasmiyafatma/order-management)

2. **Navigate to the Project Directory:**

```bash
cd ./order-management
```

3. **Install Dependencies:**

```bash
npm install
```

4. **Run the Development Server:**

```bash
npm run dev
```

5. **Open in Browser:**

```bash
Open http://127.0.0.1:5173/ in your web browser.
```

The development server will start, and you can view the project in your browser. Any changes made to the source code will automatically trigger a hot reload, allowing you to see the updates in real-time.

## Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chakra UI](https://v2.chakra-ui.com/)
- [TanStack Query (React Query)](https://tanstack.com/query/latest)\

## Features

- Login Page: Authenticate users with a simple login form.
- Product Management: View and manage product details including SKU, pricing, and inventory.
- Sale Orders: Track active and completed sale orders with detailed information.
- Create New Order: Add new sale orders through a modal form and update the product data in real-time.
- Responsive Design: Ensures optimal viewing experience across various devices.

## Project Structure

```bash
order-management/
├── public/
│   └── index.html
├── src/
│   ├── ── api.js
│   │
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── SaleOrderEditModal.jsx
│   │   ├── SaleOrderEditModal.jsx
│   │   ├── SaleOrderFormModal.jsx
│   │   ├── SaleOrders.jsx
│   │   └── ProductTable.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── README.md
└── vite.config.js

```
