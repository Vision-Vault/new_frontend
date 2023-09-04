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
            <div className="login_container">
            <div className="container">
      <div className="form-container sign-in-container">
        <form className='login_form' action="#" method="POST" onSubmit={loginhandiler}>
          <h1 className='login_h1'>Login</h1>
          <input 
          className='login_input'
            type="text"
            placeholder="Username"
            name="username"
          />
          <input
            className='login_input'
            type="password"
            placeholder="Password"
            name="password"
          />
          <button className='login_button' type="submit">Login</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            
            <button className="login_button ghost">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h2 className='login_h2'>Hello, Friend!</h2>
            <p className=''>Enter your personal details and start the journey with us</p>
            <button className="login_button ghost">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>  
    )
}