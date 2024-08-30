# FoodFiesta
FoodFiesta is an innovative food delivery application designed to simulate a real-world software development project using Git and GitHub. The project provides an opportunity to explore collaborative development practices, version control, and feature management.


## Table of Contents

1. [Project Overview](#project-overview)
2. [Team Members](#team-members)
3. [Project Features](#project-features)
4. [Branch Purposes](#branch-purposes)
5. [Challenges Encountered](#challenges-encountered)
6. [Installation Instructions](#installation-instructions)
7. [Usage](#usage)
8. [Contributing](#contributing)
9. [License](#license).

## Project Overview

FoodFiesta aims to provide a seamless and intuitive food delivery experience. By simulating real-world development processes, this project explores the integration of user authentication, order tracking, and payment processing within a modern web application.

## Team Members

The FoodFiesta project is a collaborative effort by a skilled team, each bringing their expertise to the table:

- **Tarun Vashisth** - *Frontend Developer*

   Tarun specializes in creating intuitive and responsive user interfaces. He is proficient in HTML, CSS, and JavaScript, and has a keen eye for design. In FoodFiesta, he is responsible for building the user-facing side of the application, ensuring a seamless and visually appealing experience for users.

  - **Responsibilities**: Designing and implementing the user interface using HTML, CSS, and JavaScript. Ensures the application is responsive, accessible, and visually engaging.
  - **Expertise**: HTML5, CSS3, JavaScript, UX/UI Design.

- **Jai Deep** - *Backend Developer*

  Jai is an experienced backend developer with expertise in Node.js and Express. He handles the server-side logic of FoodFiesta, ensuring that data flows smoothly between the frontend and the database. Jai's role includes developing APIs, managing database interactions, and implementing security features.

  - **Responsibilities**: Developing server-side logic and APIs using Node.js and Express. Manages database interactions, implements authentication, and ensures data integrity.
  - **Expertise**: Node.js, Express.js, Database Management, API Development.

- **Rahul Sharma** - *DevOps Engineer*

  Rahul is a skilled DevOps engineer who focuses on automating and streamlining the deployment process. He is responsible for setting up continuous integration and delivery pipelines, managing the application's infrastructure, and ensuring that FoodFiesta runs smoothly in production. Rahul also handles the monitoring and scaling of the application.

  - **Responsibilities**: Automating deployment processes, setting up CI/CD pipelines, and managing application infrastructure. Focuses on performance monitoring and scalability.
  - **Expertise**: CI/CD, Docker, Kubernetes, Infrastructure Management.

## Project Features
FoodFiesta includes several key features, each developed to enhance the user experience and streamline food delivery operations:

- **User Authentication**
  - **Description**: Provides secure login and registration capabilities. Manages user sessions and protects sensitive information.
  - **Branch**: `feature-user-authentication`
  - **Details**: Implements password hashing, user validation, and session management to ensure secure access control.

- **Order Tracking**
  - **Description**: Allows users to monitor the status of their orders in real-time, from preparation to delivery.
  - **Branch**: `feature-order-tracking`
  - **Details**: Utilizes WebSockets or similar technologies for real-time updates and status notifications. Includes features for order history and status tracking.

- **Payment System**
  - **Description**: Manages the payment process, including transaction handling, payment verification, and status updates.
  - **Branch**: `feature-payment-system`
  - **Details**: Integrates with payment gateways to ensure secure transactions. Handles payment confirmation and error handling.

## Branches and Their Purpose

Each branch in the FoodFiesta project serves a specific purpose and corresponds to a distinct feature:

- **`feature-user-authentication`**: Focuses on implementing user authentication functionalities. Contains code for login, registration, and session management. Ensures that user data is securely handled and authenticated.

- **`feature-order-tracking`**: Handles order status management. Includes functionality for updating and retrieving order statuses, ensuring that users receive timely updates about their orders.

- **`feature-payment-system`**: Manages payment processing. Contains code for handling payment transactions, validating payment details, and updating payment statuses.

## Challenges Encountered

Throughout the development of FoodFiesta, several challenges were encountered and addressed:

- **Integrating Authentication with Frontend**: Synchronizing the authentication system with the frontend involved ensuring seamless user experience and consistent state management. This required thorough testing and debugging.

- **Real-Time Order Tracking**: Implementing real-time updates for order tracking required addressing issues related to data synchronization and ensuring that updates were accurately reflected in the user interface.

- **Ensuring Payment Security**: Securing payment transactions involved integrating with payment gateways and implementing robust security measures. Challenges included ensuring compliance with industry standards and protecting sensitive user information.

Despite these challenges, the team successfully implemented robust features and streamlined processes to deliver a functional and reliable food delivery application.


## Installation Instructions

To set up FoodFiesta locally, follow these instructions:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/roonpandit/FoodFiesta.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd FoodFiesta
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Start the Application:**
   ```bash
   npm start
   ```

5. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

To use the FoodFiesta application:

1. **User Authentication**: Register a new account or log in with existing credentials.
2. **Place Orders**: Browse available restaurants and place an order.
3. **Make Payments**: Complete transactions securely through the integrated payment system.
4. **Track Orders**: Monitor the status of your orders in real-time.

## Contributing

Contributions to FoodFiesta are welcome! To contribute:

1. **Fork the Repository**: Create a personal copy of the repository.
2. **Create a Branch**: Develop new features or fix issues in a separate branch.
   ```bash
   git checkout -b your-feature-branch
   ```
3. **Commit Changes**: Add and commit your changes with descriptive messages.
   ```bash
   git add .
   git commit -m "Add feature or fix issue"
   ```
4. **Push Changes**: Push your branch to your forked repository.
   ```bash
   git push origin your-feature-branch
   ```
5. **Create a Pull Request**: Submit a pull request from your branch to the main repository.
