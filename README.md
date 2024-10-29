# Blog API

This is a simple API built with Node.js and SQLite that allows users to create and fetch blog posts. It
allows users to create new blog posts and retrieve both individual and all blog posts stored in the database. This code followes the Model-View-Controller archetecture  

## Prerequisites
You need Node.js (version 14.x or higher) installed to run this app. SQLite will be handled automatically by the application, so no additional setup is required for the database.

## Set Up
Set up this project by cloning the repository and installing the required dependencies:

1. Clone the repository:    

>```sh
>git clone https://github.com/yourusername/blog-api-service.git```  


```sh
cd blog-api-service
```    


2. Install the dependencies: Run the following command to install the necessary packages, including `express and sqlite3:

```sh
npm install express
```  
```sh
npm install squlite3
```

## Running the App  
You can run the app directly without any build process.   
Simply use the following command:

```sh
node app.js
```    

If you start the app with the default settings, it will run on port 3000 (eg.port: 3000) and set up an SQLite database in the `/database` folder called
`blog.db`.   
The server will be accessible at http://localhost:3000.  

## Running Unit Tests  
You can run unit tests to ensure that the APIs are functioning correctly. Use the following command:

```sh
npm test
```  
The test coverage will verify that the key API functionalities (fetching posts and creating posts) work as expected.

 #### *Example test output*  

```sh
=== RUN   TestCreatePost  
[POST] 2024/10/22 - 14:15:12 | 201 | 100ms | localhost:3000 | POST "/"  
--- PASS: TestCreatePost (0.10s)
```  


### API Documentation

Fetch All Posts  

Endpoint: `/`  
Method: `GET`  
Description: Retrieve all the blog posts stored in the database.  
Response json:   

```sh
[
  {  
    "id": 1,   
    "title": "Learning again",  
    "content": "Purity is learning!"      
  },   
  
  {
    "id": 2,    
    "title": "Trying again",  
    "content": "Try again till it works."  
  }   
]
```

### Fetch a Single Post by ID

Endpoint: `/:postid`  
method: `GET`  
Description: Fetch a single post by its unique `id`   
Response (json):  

```sh
{  
  "id": 1,   
  "title": "Learning Node.js",   
  "content": "On this day, I commit myself to learning the basics of running JavaScript outside browsers!"    
}
```  

### Create a New Post  
Endpoint: `/`   
Method: `POST`  
Description: Create a new blog post.  
Request Body (json):   
```sh
{   
    "title": "To create a new blog",  
    "content": "Your content will be here."    
}
```   

Response (json):     

```sh
{   
  "message": "You've created a new blog post successfully"
```   



## Next Update  
1. Add functionality to update and delete blog posts.  
2. add functionality to post comment, getAllCommentById, delete comment  
3. Implement validation for data to ensure title and content are provided.  
4. Include timestamps or author information for each post.  
