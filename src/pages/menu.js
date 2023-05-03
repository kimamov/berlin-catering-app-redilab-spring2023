import Head from 'next/head'
import ExtraPlatter from '../components/Menu/extraPlatter';
import MenuList from '../components/menuList';

import styles from './menu.module.css';

export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu Page</title>
      </Head>
      <main >
        {/*<h1>*/}
        {/*  UNSER MENÜ*/}
        {/*</h1>*/}
          <MenuList />
          <ExtraPlatter/>
      </main>
    </>
  )
}
