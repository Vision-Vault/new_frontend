import Hhead from '../components/Hhead';
import { useAuth } from "@/contexts/auth"
import Login from './login';
import CreateProjectButton from '../components/ButtonCreateProject'

export default function CookieStandAdmin() {
  const { user, token } = useAuth()

  return (

    <>
      {user ? (
      <>
      <Hhead data={"Home"} />
      <div>Hello</div>
      <CreateProjectButton />
      </>
      ):(
        <Login/>
      )
    }

    </>

  )
}