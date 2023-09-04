import Hhead from '../components/Hhead';
import Header from '@/components/header';
import Footer from '@/components/footer'
import Homeinfo from '@/components/homeinfo';
import Toprated from '@/components/toprated';
import Login from './login';
import { useAuth } from '@/contexts/auth';

export default function Home() {
  const { user, token } = useAuth()

  return (
    <>
      {user ? (
        <>
          <Hhead data="start page" />
          <Header />
          <Homeinfo />
          <Toprated />
          <Footer />
        </>
      ) : (
        <Login />
      )
      }
    </>
  );
}
