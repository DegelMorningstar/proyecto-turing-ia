import { Navbar } from './Navbar'
import Head from 'next/head'
import Script from 'next/script'

export const Layout = ({children,title='Slalom'}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8'/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Navbar />
        <main>
            {children}
        </main>
    </>
  )
}
