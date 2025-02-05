# **Social Media App - Backend API**
This is the backend API for a social media app that allows users to register, log in, create posts, follow other users, like/comment on posts, and view their feeds.

## 📌 **Features**
- User Authentication (Register, Login, JWT-based authentication)
- User Profiles (View and update profile, follow/unfollow users)
- Posts Management (Create, delete, like, comment, share posts)
- Feed System (See posts from followed users)
- MongoDB Database (Using NoSQL for scalable storage)

  
## 🛠️ **Technologies Used**
- Node.js (Backend runtime)
- Express.js (Web framework)
- MongoDB (NoSQL database)
- Mongoose (MongoDB Object Modeling)
- JWT (JSON Web Token for authentication)
- Postman (API testing)
  
## 📌 **Installation & Setup**
1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/social-media-app-backend.git
cd social-media-app-backend
```


2️⃣ Install Dependencies
```sh
npm install
```


3️⃣ Set Up Environment Variables
Create a .env file in the root directory and add the following values:

```env
PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
```


4️⃣ Start the Server
```sh
npm start
```
**The API will run on http://localhost:8000**

## 📌 **API Documentation**
- 1️⃣ User Authentication
- 🔹 Register User
- Endpoint: POST /api/auth/register
- Description: Register a new user
- Request Body:
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```
- Response:
```json
{
  "message": "User registered successfully",
  "token": "your_jwt_token"
}
```

Screenshot:![user-post](https://github.com/user-attachments/assets/f2e41fbb-9897-407e-afb0-baa7b70b7a44)


- 🔹 Login User
- Endpoint: POST /api/auth/login
- Description: Log in an existing user
- Request Body:
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```
- Response:
```json
{
  "message": "Login successful",
  "token": "your_jwt_token"
}
```

Screenshot: ![login-post](https://github.com/user-attachments/assets/59f73e5f-cbe7-407d-93b0-c4faa815954b)


- 2️⃣ User Profile
- 🔹 Get User Profile
- Endpoint: GET /api/users/me
- Headers:
```json
{
  "Authorization": "Bearer your_jwt_token"
}
```
- Response:
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "followers": [],
  "following": []
}
```

![user-get](https://github.com/user-attachments/assets/84dff1f0-6a8c-456e-bdfd-7822c2682fb4)


- 🔹 Follow a User
- Endpoint: POST /api/users/:userId/follow
- Headers:
```json
{
  "Authorization": "Bearer your_jwt_token"
}
```
- Response:
```json
{
  "message": "You are now following user"
}
```

- 3️⃣ Post Management
- 🔹 Create a Post
- Endpoint: POST /api/posts
- Headers:
```json
{
  "Authorization": "Bearer your_jwt_token",
  "Content-Type": "application/json"
}
```
- Request Body:
```json
{
  "text": "Hello, world!",
  "image": "https://example.com/image.jpg"
}
```
- Response:
```json
{
  "message": "Post created successfully",
  "post": {
    "id": "some_post_id",
    "text": "Hello, world!",
    "image": "https://example.com/image.jpg",
    "likes": [],
    "comments": []
  }
}
```


Screenshot:


- 🔹 Like a Post
- Endpoint: POST /api/posts/:postId/like
- Headers:
```json
{
  "Authorization": "Bearer your_jwt_token"
}
```
- Response:
```json
{
  "message": "Post liked successfully"
}
```

- 🔹 Comment on a Post
- Endpoint: POST /api/posts/:postId/comment
- Headers:
```json
{
  "Authorization": "Bearer your_jwt_token"
}
```
- Request Body:
```json
{
  "text": "Great post!"
}
```
- Response:
```json
{
  "message": "Comment added successfully"
}
```


- 4️⃣ Feed System
- 🔹 Get Feed (Posts from Followed Users)
- Endpoint: GET /api/feed
- Headers:
```json
{
  "Authorization": "Bearer your_jwt_token"
}
```
- Response:
```json
{
  "feed": [
    {
      "id": "post_id",
      "text": "Hello, world!",
      "image": "https://example.com/image.jpg",
      "likes": 5,
      "comments": 2
    }
  ]
}
```


## 📌 **Testing with Postman**
You can test the API using Postman:

## Open Postman
- Import the API collection (add requests one by one)
- Use the Authorization: Bearer Token feature for protected routes
- Test each endpoint
- Example Postman screenshot:

## 📌 **Project Structure**
```bash
/social-media-app-backend
│── /middleware
│── /models
│── /routes
│── .env
│── server.js
│── package.json
│── README.md
```

## 📌 **Future Improvements**
- Add real-time notifications using WebSockets
- Implement pagination for posts and comments
- Improve security with rate limiting


## 📌 **Contributing**
- Fork the repo
- Create a new branch (feature-branch)
- Commit your changes
- Push to GitHub and create a Pull Request
