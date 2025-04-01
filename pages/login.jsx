import { useState } from "react";
import { loginUser } from "../utils/auth";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userToken = await loginUser(username, password);
        if (userToken) {
            setToken(userToken);
            localStorage.setItem("token", userToken);
            alert("Login successful!");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {token && <p>Logged in with token: {token}</p>}
        </div>
    );
}
