# Website for the student organization SPIIK

This is the website for the student organization SPIIK at the Linneaus University in Kalmar, Sweden. The website is built with Next.js (app router) and Tailwind CSS. The website is hosted on a Ubuntu server on Digital Ocean via a docker container. To hold all the data for the website, a ....... database is used.

<br>

## Making changes to the website

All smaller updates are done via the admin page of the website. There you can change the name, text and image for board members, and change the text on the front page regarding the yearly introduction.

To make bigger changes to the website, you need to clone this repository and make the changes locally. When you are done, you can push the changes to the repositoryo on the main branch and relevant pipelines will be run to build and deploy the website to the Ubuntu server.

<br>

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the website for production
- `npm run start` - Run the built application
- `npm run lint` - Lint the code

<br>

## File structure

The file structure of the website is divided into two main parts. The first part holds all the code that is shared between the different features of the website. This includes the app, components, db, hooks and lib folders. Only parts that are general and are ment to be used widely across the codebase should be placed here.

```
├── src
│   ├── app
│   ├── components
│   ├── db
│   ├── hooks
│   ├── lib
```

<br>

The second part holds all the code for the specific features of the website. Each feature has its own folder and they should be kept **separate** from each other to make it easier to find and work on them, and to adhere to the separation of concerns principle.

```
│   ├── features
│   │   ├── admin
│   │   ├── analytics
│   │   ├── news
│   │   ├── products
│   │   ├── protokoll
│   │   ├── users
```

<br>

> This file structure is enforced by eslint rules to help the developers keep the codebase clean and organized.

<br>

## Webshop

The webshop is built with the help of the Stripe API. The products are stored in the database and fetched when the user visits the webshop. When the user wants to buy a product, the product is added to the cart and the user can then proceed to checkout. The user can then pay for the products with the help of the Stripe API.

<br>

## Automatic Deployment

The website is automatically deployed to the Ubuntu server on Digital Ocean when changes are pushed to the main branch. The deployment is done with the help of Github Actions and a Docker container. The deployment is done in the following steps:

<br>

1. The code is pushed to the main branch
2. Pipelines are run
3. Github Actions is triggered:

   1. **Login to Docker Hub** which is the registry where the Docker image is stored.
   2. **Build and push** the Docker image to Docker Hub.
   3. **Deploy to DigitalOcean Droplet** by SSHing into the server and pulling the latest Docker image from Docker Hub, and then running the image.
