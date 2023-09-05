import Hhead from './Hhead';
import Header from '@/components/header';
import Footer from '@/components/footer'
import Homeinfo from '@/components/homeinfo';
import Toprated from '@/components/toprated';

export default function Home() {
  return (
    <>
      <Hhead data="start page" />
      <Header />

      <Homeinfo />
      <Toprated />
      <Footer />
    </>
  );
}
