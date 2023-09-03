import Hhead from '../components/Hhead';
import { useAuth } from "@/contexts/auth"
import Login from './login';
import Home from '@/components/mainhome';

export default function Index() {
  const { user, token } = useAuth()

  return (

    <>
      {user ? (
      <>
      <Hhead data={"Home"} />
     <Home/>

   </>
      ):(
        <Login/>
      )
    }

    </>

  )
}
