import Hhead from '../components/Hhead';
import { useAuth } from "@/contexts/auth"
import Login from './login';
import UpdateProjectButton from '@/components/UpdateProjectButton';
export default function Index() {
  const { user, token } = useAuth()

  return (

    <>
      {user ? (
      <>
      <Hhead data={"Home"} />
<UpdateProjectButton/>
      <div>Hello</div>
      </>
      ):(
        <Login/>
      )
    }

    </>

  )
}
