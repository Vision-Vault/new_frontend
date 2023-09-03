import Hhead from '../components/Hhead';
import { useAuth } from "@/contexts/auth"
import Login from './login';
export default function Index() {
  const { user, token } = useAuth()

  return (

    <>
      {user ? (
      <>
      <Hhead data={"Home"} />
      <div>Hello</div>
      </>
      ):(
        <Login/>
      )
    }

    </>

  )
}
