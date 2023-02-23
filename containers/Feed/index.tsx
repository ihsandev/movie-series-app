import Card from '@/components/Card'
import Layouts from '@/layouts'
import { Entries } from '../../pages/api/movies'
import { FC, useEffect, useState } from 'react'

interface IMovies {
  total: number,
  entries: Entries[]
}

interface IFeed {
  type: string;
  title: string;
}

const initData = {
  total: 0,
  entries: []
}

const Feed: FC<IFeed> = ({type, title}) => {
  const [data, setData] = useState<IMovies>(initData)
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    try {
      setLoading(true)
      const res = await fetch(`/api/movies?type=${type}`)
      const resData = await res.json()
      setData(resData?.data)
    } catch (error) {
      setData(initData)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Layouts subtitleHeader={title}>
      {
        loading ? (
          <section>
            <h2>Load Data {title} ...</h2>
          </section>
        ) : (
          <>
            {
              data.entries.length > 0 ? (
                <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10'>
                  {data.entries.map((entry, index) => {
                    return (
                      <Card key={index} title={entry.title} imageSrc={entry.images['Poster Art'].url} />
                    )
                  })}
                </section>
              ) : (
                <section className='grid items-center justify-center'>
                  <h1 className='text-3'>Data Not Found !!</h1>
                </section>
              )
            }
          </>
        )
      }
    </Layouts>
  )
}

export default Feed
