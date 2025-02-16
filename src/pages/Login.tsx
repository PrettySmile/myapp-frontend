import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        // TODO: 這裡可以連接你的 API 來驗證帳密
        if (username === "admin" && password === "1234") {
            alert("登入成功！");
            navigate("/dashboard");
        } else {
            alert("帳號或密碼錯誤");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4">登入</h2>
                <input
                    type="text"
                    placeholder="帳號"
                    className="w-full p-2 mb-2 border rounded"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="密碼"
                    className="w-full p-2 mb-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleLogin}
                    className="w-full p-2 bg-blue-500 text-white rounded"
                >
                    登入
                </button>
            </div>
        </div>
    );
}
