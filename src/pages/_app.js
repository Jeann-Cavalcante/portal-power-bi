import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'
import { SessionProvider } from "next-auth/react"
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
    <ChakraProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </ChakraProvider>
    </SessionProvider>
    )
}
