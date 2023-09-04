import Hhead from '../components/Hhead';
import { useAuth } from "@/contexts/auth"
import Login from './login';
import Home from '@/components/mainhome';
import StartPage from '@/components/StartPage';
import CreateProjectButton from '../components/ButtonCreateProject'

export default function Index() {
  const { user, token } = useAuth()

  return (

    <>
<StartPage/>
    </>

  )
}
