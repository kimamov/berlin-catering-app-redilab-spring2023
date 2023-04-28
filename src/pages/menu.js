import Head from 'next/head'
import ExtraPlatter from '../components/Menu/extraPlatter';

export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu Page</title>
      </Head>
      <main >
        <h1>
          Menu Page
        </h1>
        <ExtraPlatter/>
      </main>
    </>
  )
}
