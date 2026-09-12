# Deployment

## Firebase

1. Create a Firebase project and Web App.
2. Enable Authentication → Email/Password and optionally Google.
3. Create Firestore Database.
4. Deploy `firestore.rules`.
5. Add the six Vite Firebase variables from `.env.example` to the deployment environment.

## Vercel

1. Import this GitHub repository into Vercel.
2. Framework preset: Vite.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Add the six Firebase environment variables.
6. Deploy.

## Cross-device sync

Sign into the same Firebase account on every device. Progress is stored under `users/{uid}/progress/{problemId}` and plans under `users/{uid}/plans/{planId}`. Firestore offline persistence keeps local changes available and synchronizes after reconnection.

Never put Firebase service-account credentials in the frontend environment.