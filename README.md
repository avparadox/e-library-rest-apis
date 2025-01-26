# Docs for my Rest-APIs learning.

Hey I'll keep on writing what I learnt. Hopefully we complete this.

Source:
![Mastering API's](/assets//6SJQ5eOChrA-HD.jpg)

[Video Source](https://youtu.be/6SJQ5eOChrA?si=cTWmTViO7D69VJK5)

<details>

<summary>
Chapter 1 - Init Commands and Package installations
</summary>

## Step 1: Init a package.json

```bash
npm init
```

## Step 2: Complete all the GitHub Stiff

```bash
Get a new repo & just copy paste the commands
```

## Step 3: Adding TS Support with Nodemon

```bash
npm install -D typescript ts-node nodemon @types/node
```

## Step 4 : Make a .gitignore file & add files as needed.

```bash
node_modules
```

## Step 5: Initing TSC File for TypeScript

```bash
npx tsc --init
```

## Step 6: Setup ESLint

```bash
npm init @eslint/config@latest
```

## Step 7: Setup Express

Create a server & app. Run the server & then create routes in the app section

```bash
npm i express
npm i -D @types/express
```

## Step 8: DotEnv Setup

Create a config file to map the process.env.{value} & make it readonly & export it.

Then install dotenv packages & use it in the server side.

```bash
npm i dotenv
npm i -D @types/dotenv
```

## Step 9: Installing Mongoose

First we need to create a mongodb instance using our Docker

```bash
docker run --name mongodb -d -p 27017:27017 mongo
```

After this we need to install mongoose & it's types

```bash
npm i mongoose
npm i -D @types/mongoose
```

## Step 10: Error Handling Configuration

We need to handle errors in a specific way. Global Error Handler is used here in our code.
Showing the error stack is one of the important things here.

```bash
npm i http-errors
npm i -D @types/http-errors
```

</details>

<details>
<summary>
Chapter 2 - Real Story of Backend
</summary>

## Step 1: Define Routes in a clean manner

First we need to make a different folder as per our usecase. For me it's user so I am doing in this way.

Then we need to make a Router Folder. For me it's userRouter.

```bash
create a router & controller. Then make use of app.use in the main app file and use different routes. This make your app very clean while coding different systems. 

router should make reference to the controller which will help us in keep things minimal & clean.
```

For more reference refere user register commit.

## Step 2: Define Databse Model

In this section, we need to define model for the data we are accepting for MongoDB from the user. 

```bash
We need to define the name, email & password types with if they are required or not. Unique or not and soo on.
```

For more info, refer User Model Added commit from the commit history.


## Step 3: Hashing the password

In this chapter, we are storing only the hashed password in our Database.

```bash
We are using library called bcrypt and not bcryptjs. We are basically hashing our password using this library and we are also adding number of salt rounds so that our password is hashed nicely.
```

For more info, kindly visit Added hashing to the password commit history.


## Step 4: Adding JWT

In this chapter, we are adding JWT (Json Web Token) to our system so that we can generate a token for the user.

```bash
We are using a library called as jsonwebtoken. Using this library we are signing a token or accessToken which we are creating using user details like _id (user id made by the MongoDB) & jwtSecret (stored on the server). We are also adding an expiry limit and an algorithm for the JWT to be created.

Also the secret stored on the server helps in creating the JWT and then also verifying the JWT token given by the user on verifying it's legitimacy of it's role and exisitence on the Databse.

In this way, secret is being used to create the token and also verifying the token when taken back by the user.
```

For more info, kindly visit the Added JWT commit in history.
</details>


---

Happy Coding :)
