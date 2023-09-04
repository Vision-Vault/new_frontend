import '@/styles/globals.css'

import '../styles/narmeen.css'; 
import '../styles/aseel.css'; 
import '../styles/mohammad.css';
import '../styles/hasan.css';
import '../styles/husam.css';
import '../styles/abdallah.css';


import { AuthProvider } from '@/contexts/auth'
export default function App({ Component, pageProps }) {
  return <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
}
