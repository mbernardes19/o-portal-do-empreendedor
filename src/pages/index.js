import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import MainContainer from '../components/MainContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <MainContainer />
    </>
  )
}
