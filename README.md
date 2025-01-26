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
Chapter 2 - Defining Post Endpoints
</summary>

## Step 1:

First we need to make a different folder as per our usecase. For me it's user so I am doing in this way.

Then we need to make a Router Folder. For me it's userRouter.

```bash
create a router & controller. Then make use of app.use in the main app file and use different routes. This make your app very clean while coding different systems. 

router should make reference to the controller which will help us in keep things minimal & clean.
```

For more reference refere user register commit.

</details>

---

Happy Coding :)
