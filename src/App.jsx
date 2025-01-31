import { useState, useEffect } from "react";
import { auth } from "./components/Firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import Loginsign from './components/Loginsign';



const App = () => {
  const [user, setUser] = useState(null);

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup the listener
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {user ? (
        <div className="text-center p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-2xl font-bold">Welcome, {user.email}!</h2>
          <button
            onClick={() => signOut(auth)}
            className="mt-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <Loginsign />
      )}
    </div>
  )
}

export default App
