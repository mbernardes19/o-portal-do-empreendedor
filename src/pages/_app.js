import '../styles/bootstrap-reboot.min.css'
import '../styles/bootstrap.min.css'
import '../styles/bootstrap-grid.min.css'
import NavBar from '../components/Navbar'
import { setSessionId } from '../utils/session'
import { useEffect } from 'react'
import styles from '../styles/App.module.css'
import { Roboto } from 'next/font/google'
import classnames from 'classnames'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setSessionId()
  }, [])
  
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily} !important;
        }
      `}</style>
      <NavBar />
      <div className={classnames(styles.outerContainer, roboto.className)}>
        <Component {...pageProps} />
      </div>
    </>
  )
}