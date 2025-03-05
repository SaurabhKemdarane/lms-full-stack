# LMS_How_To_Run_Project

## How to Setup & Run this Project


---
## Links

### Install NodeJs (Ignore If Already Installed)
1. Visit the official Node.js website: [Download Node.js](https://nodejs.org/en/download/)
2. Download the Node.js installer
3. Run the installer

---
## First Run Server then Client

### Steps to Setup Server of the Project
1. Open Project Folder In VS Code
2. Setup MongoDB & obtain MongoURI
   - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
3. Setup Cloudinary
   - [Cloudinary](https://cloudinary.com/users/register_free)
4. Setup Clerk & Clerk Webhooks
   - [Clerk](https://clerk.com/)
5. Setup Stripe
   - [Stripe](https://dashboard.stripe.com/login)
6. Push Project to GitHub & Deploy Backend on Vercel to obtain backend URL
   - [Vercel](https://vercel.com/)
7. Add Backend Link to Clerk Webhooks & Stripe Webhook

---
## Before Running Client Project
Ensure the server is deployed and running on the server.

### Steps To Run Client of The Project
1. Open Folder in Integrated Terminal
2. Install Dependencies Using Command:
   ```sh
   npm install
   ```
3. Add Backend Deployed URL & Environment Variables
4. Now Run Project Using Command:
   ```sh
   npm run dev
   ```
5. Deploy the project

---
