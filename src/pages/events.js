import EventGallery from '../components/Events/eventGallery';
import Head from 'next/head'


export default function Events() {
  return (
    <>
      <Head>
        <title>Events Page</title>
      </Head>
      <main>
        {/* <h1>
          Events Page
        </h1> */}
        <EventGallery />
      </main>
    </>
  )
}
