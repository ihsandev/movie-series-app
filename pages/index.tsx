import Card from '@/components/Card'
import Layouts from '@/layouts'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <Layouts subtitleHeader='Popular Titles'>
      <section className='flex items-center gap-4'>
       <Card insideTitle='Series' title='Popular Series' onClick={() => router.push('/series')} />
       <Card insideTitle='Movies' title='Popular Movies' onClick={() => router.push('/movies')} />
      </section>
    </Layouts>
  )
}

export default Home
