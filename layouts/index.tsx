import Head from "next/head"
import { FC, ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

interface ILayouts {
  children: ReactNode,
  subtitleHeader?: string
}

const Layouts : FC<ILayouts> = ({children, subtitleHeader}) => (
  <>
    <Head>
      <title>Movie Series App</title>
      <meta name="description" content="The Movie Series App" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header subtitleHeader={subtitleHeader} />
      <main className="mt-40 min-content">
        <div className="mx-auto container px-2 md:px-0">
          {children}
        </div>
      </main>
    <Footer />
  </>
)

export default Layouts