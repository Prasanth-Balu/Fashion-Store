# Fashion Store

A full-stack fashion e-commerce web application built using the MERN stack. Users can browse products, view product details, add products to the cart, place orders, and manage their account. An admin panel is included for managing products and orders.

## Features

### User Features

* User registration and login
* JWT-based authentication
* Browse fashion products
* Browse products by category
* View product details
* Add products to cart
* Manage cart items
* Place orders
* View order information
* User logout

### Admin Features

* Admin authentication
* Admin dashboard
* Add new products
* Upload product images
* View all products
* Edit products
* Delete products
* View customer orders
* Manage order status

## Categories

* Men
* Women
* Kids
* Accessories

## Screenshots

### Home

<img width="1901" height="889" alt="Home" src="https://github.com/user-attachments/assets/fc1478ca-d97c-42ae-94b5-04aaf3b9b103" />


### Products

<img width="1903" height="893" alt="Products" src="https://github.com/user-attachments/assets/6640b864-76f7-487c-8e62-2e73c4323fcd" />


### Product Details

<img width="1894" height="887" alt="ProductDetails" src="https://github.com/user-attachments/assets/9ccb97c7-400d-4df0-a02b-39d0c6cc8143" />


### Cart

<img width="1891" height="889" alt="Cart" src="https://github.com/user-attachments/assets/ff30808d-8ba5-43e1-ba72-44d1be8bd193" />

### Delivery Information

<img width="1899" height="891" alt="Delivery" src="https://github.com/user-attachments/assets/b09b5fc3-79d0-419a-a928-4654f606905f" />

### Register

<img width="1896" height="881" alt="Register" src="https://github.com/user-attachments/assets/0ad4337d-10ec-4dcc-aeab-49eab3c61d57" />


### Login

<img width="1896" height="819" alt="Login" src="https://github.com/user-attachments/assets/a248f343-1b12-457e-9fb4-49c7b8eac61b" />

### Admin Add Products

<img width="1888" height="878" alt="AdminAddproduct" src="https://github.com/user-attachments/assets/a20a515c-e0dd-4053-afde-99ecd6f1f483" />


### Admin Side ProuctLists

<img width="1889" height="884" alt="AdminSideProductList" src="https://github.com/user-attachments/assets/e85ed73f-7ffe-47ae-aec1-a06bfb080a65" />

### Admin Manage Customer Orders

<img width="1920" height="887" alt="OrdersPage" src="https://github.com/user-attachments/assets/4c04abb6-a69a-482c-932a-860448cd4ccd" />


## Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Multer


## Project Structure

```text
FashionStore/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── css/
│   │   └── ...
│   ├── package.json
│   └── package-lock.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

## API Endpoints

### User APIs

```text
POST   /api/users/register
POST   /api/users/login
```

### Product APIs

```text
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

### Order APIs

```text
POST   /api/orders
GET    /api/orders
PUT    /api/orders/:id/status",
```


### Start the backend

```bash
cd backend
npm run dev
```

### Start the frontend

```bash
cd frontend
npm run dev
```

## Future Improvements

* Payment gateway integration
* Product reviews and ratings

## Author

Prasanth B

