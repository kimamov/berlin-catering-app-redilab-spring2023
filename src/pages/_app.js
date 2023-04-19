import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
