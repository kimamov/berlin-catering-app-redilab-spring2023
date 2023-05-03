import Head from 'next/head';
import MenuList from '../components/menuList';


export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu Page</title>
      </Head>
      <main >
        <h1>
          OUR MENU
        </h1>
          <MenuList />
      </main>
    </>
  )
}
