import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Footer = () => {
  const [hover, setHover] = useState('')
  return (
    <footer className="bg-slate-800 text-white pt-6 pb-8 px-2 md:px-0">
      <div className="mx-auto container">
        <nav className="flex flex-col md:flex-row md:items-center text-sm text-gray-300">
          <Link href={'/'} className="block md:pr-5 md:border-r-2 md:border-gray-300">Home</Link>
          <Link href={'/'} className="block md:px-5 md:border-r-2 md:border-gray-300">Terms and Conditions</Link>
          <Link href={'/'} className="block md:px-5 md:border-r-2 md:border-gray-300">Privacy Policy</Link>
          <Link href={'/'} className="block md:px-5 md:border-r-2 md:border-gray-300">Collection Statement</Link>
          <Link href={'/'} className="block md:px-5 md:border-r-2 md:border-gray-300">Help</Link>
          <Link href={'/'} className="block md:px-5">Manage Account</Link>
        </nav>
        <div className="text-sm text-gray-400 mt-2">
          Copyright &copy; {new Date().getFullYear()} DEMO Streaming All Rights Reserved.
        </div>
        <section className="flex justify-between items-center">
          <div className="mt-8 flex items-center gap-5">
            <Link href={'/'} onMouseEnter={() => setHover('fb-color')} onMouseLeave={() => setHover('')}>
              {hover === 'fb-color' ? (
                <Image src="/assets/social/facebook-blue.svg" alt="social-media" width={16} height={16} />
              ) : (
                <Image src="/assets/social/facebook-white.svg" alt="social-media" width={16} height={16} />
              )}
            </Link>
            <Link href={'/'} onMouseEnter={() => setHover('tw-color')} onMouseLeave={() => setHover('')}>
              {hover === 'tw-color' ? (
                <Image src="/assets/social/twitter-blue.svg" alt="social-media" width={32} height={32} />
              ) : (
                <Image src="/assets/social/twitter-white.svg" alt="social-media" width={32} height={32} />
              )}
            </Link>
            <Link href={'/'} onMouseEnter={() => setHover('ig-color')} onMouseLeave={() => setHover('')}>
              {hover === 'ig-color' ? (
                <Image src="/assets/social/instagram-blue.svg" alt="social-media" width={32} height={32} />
              ) : (
                <Image src="/assets/social/instagram-white.svg" alt="social-media" width={32} height={32} />
              )}
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-5">
            <Link href={'/'}>
              <Image src="/assets/store/app-store.svg" alt="store-media" width={100} height={50} />
            </Link>
            <Link href={'/'}>
              <Image src="/assets/store/play-store.svg" alt="store-media" width={100} height={50} />
            </Link>
            <Link href={'/'}>
              <Image src="/assets/store/windows-store.svg" alt="store-media" width={100} height={50} className='h-7' />
            </Link>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer