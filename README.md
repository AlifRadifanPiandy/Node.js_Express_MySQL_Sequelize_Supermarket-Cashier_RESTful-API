# Supermarket Cashier - RESTful API

- [Project Description](#project-description)
- [Database Design](#database-design)
- [MVC Pattern USE](#mvc-pattern-use)
- [How to Run the Project](#how-to-run-the-project)
- [API Documentation](#api-documentation)
- [Contribution](#contribution)
- [License](#license)

## Project Description

This project is a RESTful API application that allows admins or cashiers to manage transactions in a supermarket. This application was built using Node.js and implements token-based authentication with JSON Web Token (JWT).

## Database Design

### Users Table

This table will store information about all users.

- `id` (Primary Key): User ID.
- `username`: Username.
- `password`: User password (must be hashed).
- `name`: User's full name (optional).
- `address`: User address (optional).
- `phone`: User phone number (optional).
- `nik`: User's Population Identification Number (optional).
- `role_id` (Foreign Key to the Roles Table): User role.

### Roles Table

This table will store a list of roles that users can have.

- `id` (Primary Key): Role ID.
- `name`: Role name (example: 'admin', 'cashier').

### Products Table

This table will store information about items that can be sold or purchased.

- `id` (Primary Key): Item ID.
- `name`: Item name.
- `category`: Item category.
- `price`: Price of goods per unit.
- `stock`: Stock items.

### Transactions Table

This table will record every transaction made by the admin or cashier.

- `id` (Primary Key): Transaction ID.
- `user_id` (Foreign Key to the Users Table, shows the admin or cashier who made the transaction).
- `transaction_date`: Transaction date.
- `total_amount`: Total transaction price.

### TransactionDetails Table

This table will record item details in each transaction.

- `id` (Primary Key): Transaction detail ID.
- `transaction_id` (Foreign Key to Transactions Table): ID of the associated transaction.
- `product_id` (Foreign Key to Products Table): ID of the associated item.
- `quantity`: Number of items purchased.
- `unit_price`: Price per unit of the item at the time of transaction.

## How to Run the Project

To run this project, follow these steps:

1. Clone repository from GitHub:

   ```bash
   git clone https://github.com/AlifRadifanPiandy/Node.js_Express_MySQL_Supermarket-Cashier_RESTful-API.git

   ```

2. Go to the project directory:

   ```bash
   cd Node.js_Express_MySQL_Supermarket-Cashier_RESTful-API

   ```

3. Install project dependencies:

   ```bash
   npm install

   ```

4. Database configuration:

   Make sure you have set up a MySQL database and configured your database connection in the configuration file.
   Run database migration to create the required tables:

   ```bash
   npx sequelize-cli db:migrate

   ```

5. Run the project:

   ```bash
   npm start

   ```

6. The project will run at http://localhost:3000. You can access the API by using an HTTP client application such as Postman.

## API Documentation

API documentation is available in Postman format. You can import the Postman JSON file that accompanies this project to get complete documentation about the API endpoints, required requests, and expected responses.

https://documenter.getpostman.com/view/24200467/2sA3XJk4ri

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
