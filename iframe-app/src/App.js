import { initializeApp } from 'firebase/app';
import { signInWithPopup, GoogleAuthProvider, browserLocalPersistence, browserPopupRedirectResolver, initializeAuth, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: browserLocalPersistence,
  popupRedirectResolver: browserPopupRedirectResolver
})

function App() {
  const login = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider())
        .then((result) => {
          console.log('Signed in:', result);
        })
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth).then(() => {
        console.log("Signed out.");
      });
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
