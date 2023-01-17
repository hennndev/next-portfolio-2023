import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <ThemeProvider enableSystem={true} attribute='class'>
            <Navbar/>
            <Component {...pageProps} />
            <Footer/>
        </ThemeProvider>
    </>
  )
}

export default MyApp
