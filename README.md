# Byte Size Trivia

## Overview

Byte Size Trivia is an interactive quiz game featuring two different game modes.

In **Custom Mode**, players can personalize their experience by selecting the quiz category, difficulty level, and the number of questions - perfect for practicing trivia.

Alternatively, **Challenge Mode** offers an unlimited series of questions where players must answer each question within the 15 second time limit. Answer incorrectly or run out of time, then they lose a life. Once all lives are lost, the game ends. Players can track their highscore and compete against each other for the top spot on the leaderboard.

## Technologies Used

Byte Size Trivia is built using the following technologies:

### Frontend

- **TypeScript** - [Learn More](https://www.typescriptlang.org/)
- **React** - [Learn More](https://reactjs.org/)
- **Tailwind CSS** - [Learn More](https://tailwindcss.com/)
- **React Router** - [Learn More](https://reactrouter.com/)
- **React Toastify** - [Learn More](https://fkhadra.github.io/react-toastify/)
- **Vite** - [Learn More](https://vitejs.dev/)

### Backend

- **Firebase**:
  - **Hosting** - [Learn More](https://firebase.google.com/docs/hosting)
  - **User Authentication** - [Learn More](https://firebase.google.com/docs/auth)
  - **Firestore Database** - [Learn More](https://firebase.google.com/docs/firestore)

## Installation

To get started with Byte Size Trivia, follow the steps below to clone the repository, install dependencies, and set up Firebase for user authentication, Firestore, and optional hosting.

### Step 1: Clone the Repository

Begin by cloning the repository from GitHub:

```bash
git clone https://github.com/sam-champion/quiz-app.git
cd byte-size-trivia
```

### Step 2: Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

This will install the necessary packages specified in the package.json file, including Firebase, React, React Router, Tailwind CSS, and TypeScript.

### Step 3: Set Up Firebase

To enable user authentication and Firestore in your app, you need to create a Firebase project and configure the Firebase SDK.

#### Create a Firebase Project

1. Go to https://firebase.google.com/ and navigate to the Firebase Console.
2. Click on "Create a project" and follow the steps to create a new Firebase project.

#### Configure Firebase Authentication

1. In your Firebase project, navigate to Authentication in the left sidebar.
2. Click on the Get Started button.
3. Enable the authentication method for Email/Password.

#### Set Up Firestore

1. In the Firebase Console, navigate to Firestore Database in the left sidebar.
2. Click on Create Database and choose Start in test mode to enable Firestore.
3. Follow the prompts to set up your Firestore database.

#### Firebase Hosting (Optional)

If you want to deploy the app using Firebase Hosting:

Install the Firebase CLI globally (if you haven’t already):

```bash
npm install -g firebase-tools
```

Log in to Firebase using the Firebase CLI:

```bash
firebase login
```

Initialize Firebase in your project:

```bash
firebase init
```

### Step 4: Firebase Configuration

1. Go to the Firebase Console and navigate to Project Settings.
2. Under Your Apps, select Web and register the app to get your Firebase configuration.
3. Copy the Firebase config object and replace the values in the src/firebase.ts file with your config:

```typescript
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const analytics = getAnalytics(firebaseApp);
export default firebaseApp;
```

### Step 5: Run the App

After completing the Firebase setup, you can run the app locally to test it:

```bash
npm run dev
```

The app should now be running locally, and you can start interacting with the quiz game.

### Step 6: Build and Deploy (Optional)

To build and deploy the app to Firebase Hosting, use the following commands:

Build the app:

```bash
npm run build
```

Deploy the app:

```bash
firebase deploy
```

After deployment, Firebase will provide a hosting URL where you can access the live app.

## License

This project is licensed under the MIT License. See [here](https://choosealicense.com/licenses/mit/) for more information.
