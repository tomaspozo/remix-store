# Welcome to the "Remix Store" starter project

The purpose of this project is to serve as a starting point to discuss and implement [Remix](https://remix.run) functionalities with better aproaches (get to know best practices).

> This is a work in progress. Checkout whats next [in this issue](https://github.com/tomaspozo/remix-store/issues/1).

## Remix Store

A web application that emulates a small online store, allow users to see products, search for specific products, add them to their cart and finally create an order.

## Stack

- [Remix](https://remix.run)
- [MongoDB](https://mongodb.com)
- [Prisma](https://prisma.io)
- [Chakra UI](https://chakra-ui.com)

## Local development

### Requirements 

You will need a MongoDB cluster configured as a Replica Set, I recommend to creat a Free Cluster on [MongoDB Atlas](https://www.mongodb.com/atlas/database). If you want to deploy locally [see this alternatives](https://github.com/prisma/prisma/issues/8713#issuecomment-1045268231)

1. Create a `.env` file to expose your MongoDB cluster URI so Prisma can connect to it, example:

```sh
DATABASE_URL="mongodb+srv://root:randompassword@cluster0.ab1cd.mongodb.net/mydb?retryWrites=true&w=majority"
```

2. Install dependencies
```sh
npm install
```

3. Generate Prisma classes based on the schema. *Note: Do this every time you change your schema, read more about the Prisma schema [here](https://www.prisma.io/docs/concepts/components/prisma-schema).* 
```sh
npx prisma generate
```

### Development
Start the development server
```sh
npm run dev
```

The Netlify CLI starts your app in development mode, rebuilding assets on file changes.

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually following this steps:


1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

4. Deploy your site:

```sh
npm run build
# preview deployment
netlify deploy

# production deployment
netlify deploy --prod
```