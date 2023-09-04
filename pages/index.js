import Hhead from '../components/Hhead';
import { useAuth } from "@/contexts/auth"
import StartPage from '@/components/StartPage';

export default function Index() {
  const { user, token } = useAuth()

  return (

    <>
      <Hhead data={"Start Page"} />
      <StartPage />
    </>

  )
}
