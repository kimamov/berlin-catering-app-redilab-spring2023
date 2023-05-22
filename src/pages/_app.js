import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
import { CartProvider } from '@/context/CartContext'
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export default function App({ Component, pageProps }) {
  return <CartProvider><Layout><Component {...pageProps} /></Layout></CartProvider>
}
