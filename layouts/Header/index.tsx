import Link from "next/link"
import { FC } from "react";

interface IHeader {
  subtitleHeader?: string;
}

const Header: FC<IHeader> = ({ subtitleHeader }) => (
  <header className="fixed top-0 right-0 left-0">
    <nav className="bg-blue-600 text-white py-3 px-2 md:px-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={'/'}>
          <h1 className="text-4xl">Demo Streaming</h1>
        </Link>
        <div className="flex items-center">
          <Link href={'/login'} className="p-2 mr-6">Log In</Link>
          <Link href={'/trial'} className="bg-slate-900 text-white p-2">
            Start Your Free Trial
          </Link>
        </div>
      </div>
    </nav>
    {subtitleHeader && (
      <nav className="bg-slate-700 text-white py-3 px-2 md:px-0">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl">{subtitleHeader}</h1>
        </div>
      </nav>
    )}
  </header>
)

export default Header