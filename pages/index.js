import Head from 'next/head'
import About from '../components/About'
import Homepage from '../components/Homepage'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Works from '../components/Works'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Homepage />
      <About />
      <Skills />
      <Works/>
    </div>
  )
}
