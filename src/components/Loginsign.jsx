import React, { useState } from 'react'
import {auth} from '../components/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Loginsign = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Reset error state
        try {
            if (isLogin) {
                // Firebase Login
                await signInWithEmailAndPassword(auth, email, password);
                console.log("User logged in successfully!");
            } else {
                // Firebase Sign Up
                await createUserWithEmailAndPassword(auth, email, password);
                console.log("User signed up successfully!");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-4">
                    {isLogin ? "Login" : "Sign Up"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                    />
                    <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>
                <div className="text-center mt-4 text-sm">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-blue-600 hover:underline ml-1"
                    >
                        {isLogin ? "Sign Up" : "Login"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Loginsign
