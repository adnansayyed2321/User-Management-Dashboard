# User Management Dashboard

The **User Management Dashboard** is a web application built with modern front-end technologies, providing CRUD (Create, Read, Update, Delete) functionality for managing users. The project leverages the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) for backend operations.

## 🛠️ Technologies Used

- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling the application with a utility-first CSS framework.
- **JavaScript**: Core programming language for functionality.
- **React Router DOM**: For implementing routing within the application.
- **Axios**: For making HTTP requests to interact with the JSONPlaceholder API.
- **React Icons**: For adding scalable vector icons to enhance the user interface.
- **Netlify**: For deploying the application.

## ✨ Features

1. **Responsive User Interface**:
   - A top bar with the heading "User Management Dashboard".
   - An "Add New User" button that opens a popup form to create a new user.

2. **CRUD Operations**:
   - **Create**: Add a new user using a popup form.
   - **Read**: Display a list of users in a card layout.
   - **Update**: Edit user details by clicking the "Edit" button on a user card, which opens a popup form.
   - **Delete**: Remove a user by clicking the "Delete" button on a user card.

3. **Error Handling**:
   - **Network Failures**: Axios is used to handle and properly catch network errors, displaying meaningful messages to the user.
   - **Server Errors**: Responses from the server are validated and appropriate error messages are shown.

4. **Icons**:
   - React Icons are used to visually enhance buttons and interactive elements, providing a modern and user-friendly interface.

5. **Deployment**:
   - The application is deployed on Netlify and can be accessed [here](https://usermanagementsayyed.netlify.app).

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adnansayyed2321/User-Management-Dashboard.git
   cd User-Management-Dashboard
