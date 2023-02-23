// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import movies from '../../data/sample.json'

export type Entries = {
  title: string,
  description: string,
  programType: string,
  images: {
    "Poster Art": {
    url: string,
    width: number,
    height: number
    }
  },
  releaseYear: number
}

type Resp = {
  success: boolean,
  data: {
    total: number,
    entries: Entries[]
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resp>
) {
  const type = req.query.type;
  try {
    const data = movies.entries.filter(entry => entry.programType === type && Number(entry.releaseYear) >= 2010).sort((a,b) => {
      if(a.title > b.title) {
        return 1
      }
      if(a.title < b.title) {
        return -1
      }
      return 0
    })
    res.status(200).json({
      success: true,
      data: {
        total: data.length,
        entries: data
      }
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      data: {
        total: 0,
        entries: []
      }
    })
  }
}
