# Quora-like Application

This project is a simple Quora-like application built using Node.js and Express, implementing CRUD (Create, Read, Update, Delete) operations with a RESTful API.

## Overview

The application utilizes Node.js and Express to create a basic web server. It allows users to create, view, edit, and delete posts.

## Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

# Packages Installed

- **ejs**: Templating engine for rendering HTML.
- **express**: Web framework for Node.js.
- **nodemon**: Utility that monitors changes in your application and restarts the server.
- **uuid**: For generating unique identifiers.
- **method-override** : to override the HTTP method of a request for patch and delete.

# Endpoints

## Retrieve all posts

- **URL**: `/posts`
- **Method**: `GET`
- **Description**: Retrieves all posts.
- **Response**: JSON array of posts.

## Create a new post

- **URL**: `/posts`
- **Method**: `POST`
- **Description**: Adds a new post.
- **Request Body**: JSON object containing `username` and `content`.
- **Response**: JSON object of the created post.

## View a specific post

- **URL**: `/posts/:id`
- **Method**: `GET`
- **Description**: Displays a specific post.
- **Response**: JSON object of the requested post.

## Edit a specific post

- **URL**: `/posts/:id/edit`
- **Method**: `GET`
- **Description**: Shows a form to edit a specific post.
- **Response**: HTML form for editing the post.

## Update a specific post

- **URL**: `/posts/:id`
- **Method**: `PATCH`
- **Description**: Updates a specific post.
- **Request Body**: JSON object containing updated `content`.
- **Response**: Redirects to the updated post.

## Delete a specific post

- **URL**: `/posts/:id`
- **Method**: `DELETE`
- **Description**: Deletes a specific post.
- **Response**: Redirects to the list of posts.

## Project Structure

- `index.js`: Main application file containing routes and server setup.
- `views/`: Directory containing EJS templates for rendering HTML.
- `public/`: Directory for static files like CSS, images, etc.
- `package.json`: Contains project dependencies and scripts.


## Contributing

Feel free to contribute by creating issues or submitting pull requests.



