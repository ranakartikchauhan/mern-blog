---

# MERN Blog

Welcome to MERN Blog, a full-stack web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This platform allows users to read, create, edit, and delete blog posts.

## Description

MERN Blog provides a user-friendly interface for bloggers to share their thoughts, experiences, and expertise through written content. Users can sign up for an account, create and publish their own blog posts, as well as interact with other users' posts through comments and likes.

## Features

- **User Authentication**: Secure user authentication system allowing users to sign up, log in, and log out securely. Passwords are hashed and stored securely in the database.

- **Blog Post Management**: Users can create, edit, and delete their own blog posts. Each blog post can have a title, content, tags, and a featured image.

- **Comments**: Users can comment on blog posts to engage in discussions and provide feedback.

- **Likes**: Users can like blog posts to show appreciation for the content.

- **Search and Filter**: Users can search for blog posts based on keywords, tags, or authors. Posts can also be filtered by category or date.

- **Responsive Design**: The application is built with responsive design principles, ensuring a seamless experience across devices.

## Technologies Used

- **Frontend**: React.js, React Router, Redux for state management, Bootstrap for styling
  
- **Backend**: Node.js, Express.js
  
- **Database**: MongoDB with Mongoose ORM
  
- **Authentication**: JSON Web Tokens (JWT)
  
- **Deployment**: The application is deployed on [Render](#) and uses MongoDB Atlas for database hosting.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository: `git clone <repository-url>`
  
2. Navigate to the project directory: `cd mern-blog`
  
3. Install dependencies: `npm install`
  
4. Create a `.env` file in the root directory and add the necessary environment variables:

    ```
    PORT=5000
    MONGODB_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    ```

5. Run the development server: `npm start`

6. Navigate to `http://localhost:3000` in your web browser to view the application.

## Deployment

This project is deployed on Heroku. You can access the live version of the application [here](#).


---
