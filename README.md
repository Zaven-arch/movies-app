This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

Here is a comprehensive **README.md** documentation for Dockerization, outlining how to set up, build, and run the application using Docker and Docker Compose.

---

# Movie App - Dockerization Guide

This project is a simple **Movie App** built with **Next.js**. This guide will walk you through setting up, building, and running the application using **Docker** and **Docker Compose**.

## Prerequisites

Ensure you have the following installed:

- [Docker](https://www.docker.com/get-started) (Docker Engine & Docker Compose)

You can verify if Docker is installed by running the following command:

```bash
docker --version
docker-compose --version
```

## Dockerizing the Application

### 1. **Dockerfile Overview**

The application uses a multi-stage **Dockerfile** to create a production-ready Docker image.

#### **Stages of the Dockerfile:**

- **deps (Install Dependencies):** Installs all the necessary dependencies required to run the app.
- **builder (Build the App):** Builds the Next.js application, including all the necessary configurations.
- **runner (Production-Ready):** Creates a lightweight production-ready image with only the necessary files for running the app.

### 2. **`docker-compose.yml` Overview**

The **`docker-compose.yml`** file is used to define services for running the application in development and production environments. Docker Compose helps you manage multi-container applications with ease.

#### **Services Defined:**

- **app:** The development environment, where code is mounted for live-reloading. It uses the `npm run dev` command.
- **app-prod:** The production environment, where the optimized Next.js app is served. It uses the `npm run start` command.

## Setting Up the Project

1. **Clone the Repository**

   If you haven’t already, clone the repository to your local machine:

   ```bash
   git clone https://your-repository-url.git
   cd your-project-directory
   ```

2. **Install Dependencies**

   Ensure all project dependencies are installed locally:

   ```bash
   npm install
   ```

3. **Build the Docker Image**

   To build the Docker image for development or production:

   ```bash
   docker-compose build
   ```

## Running the Application

### 1. **Development Mode**

To run the application in **development mode** with live-reloading:

```bash
docker-compose up app
```

The application will be available at:

```
http://localhost:3000
```

**Note:** Changes made to the source code will be reflected immediately thanks to the mounted volume in the `docker-compose.yml` file.

### 2. **Production Mode**

To run the application in **production mode**, which serves the optimized app:

```bash
docker-compose up app-prod
```

The application will be available at:

```
http://localhost:3000
```

**Note:** This mode uses the production build of the app (`npm run start`), and will not include the live-reloading features present in development mode.

### 3. **Stopping Services**

To stop the running Docker containers, execute:

```bash
docker-compose down
```

### 4. **Rebuilding the Docker Image**

If you make changes to your application (e.g., installing new dependencies), you may need to rebuild the Docker image:

```bash
docker-compose up --build
```

---

## File Structure Overview

Here's a breakdown of the Docker-related files in this repository:

- **Dockerfile:** Defines how the image is built and the environment the app runs in.
- **docker-compose.yml:** Configures Docker services for running the app in both development and production environments.

## Benefits of Dockerization

- **Isolation:** Docker ensures that the application runs in an isolated environment, avoiding potential conflicts with the host system.
- **Consistency:** The same environment is used across different machines, ensuring the app behaves the same way everywhere.
- **Portability:** Docker containers can be run on any system that has Docker installed, making deployment and collaboration easier.
- **Ease of Setup:** Developers can easily spin up a development or production environment without worrying about environment configurations.

---

## Troubleshooting

### Common Issues:

1. **Docker Daemon Not Running:**

   - Ensure that the Docker daemon is running by checking with the command:
     ```bash
     docker info
     ```

2. **Port Conflicts:**

   - If the default port 3000 is already in use, change the port in the `docker-compose.yml` file under `ports`.
     ```yaml
     ports:
       - '4000:3000' # Change 4000 to your desired port
     ```

3. **Volume Mounting Issues (Development Mode):**
   - If changes are not reflected in development mode, ensure your Docker version supports bind mounting and that the `volumes` section in `docker-compose.yml` is correctly configured.

---

## Conclusion

By following the steps outlined above, you can easily run and manage the **Movie Management Platform** in both development and production environments using **Docker**. Docker provides a reliable and consistent environment for the application, whether running locally for development or deploying to a production server.

For further assistance or more advanced configurations (e.g., scaling the app with multiple services or setting up CI/CD pipelines), refer to the official Docker documentation or feel free to reach out!

---
