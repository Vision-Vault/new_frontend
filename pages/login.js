import Hhead from '../components/Hhead';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { useAuth } from "@/contexts/auth"

export default function Login() {
    const { login, user, token,logout } = useAuth()

    function loginhandiler(event) {
        event.preventDefault();
        login(event.target.username.value, event.target.password.value)

    }
    return (
        <>
            <Hhead data={"Login"} />
            <div className="container">
                <div className="form-container sign-in-container">
                    <form action="#" method="POST" onSubmit={loginhandiler}>
                        <h1>Login</h1>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h2>Welcome Back!</h2>
                            <p>To keep connected with us, please login with your personal info</p>
                            <button className="ghost">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h2>Hello, Friend!</h2>
                            <p>Enter your personal details and start the journey with us</p>
                            <button className="ghost">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}