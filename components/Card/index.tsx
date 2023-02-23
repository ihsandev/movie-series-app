import Image from "next/image";
import { FC, useState } from "react";

interface ICard {
  insideTitle?: string;
  title: string;
  imageSrc?: string;
  onClick?: () => void
}

const Card : FC<ICard> = ({title, insideTitle, imageSrc, onClick}) => {
  const [srcImage, setSrcImage] = useState<any>(imageSrc)
  return (
    <div onClick={onClick} className={`${onClick ? 'cursor-pointer' : ''}`}>
      {insideTitle || !imageSrc ? (
        <div className="bg-slate-800 text-white h-52 w-36 flex flex-col items-center justify-center bg-[url(/assets/placeholder.png)] bg-center bg-cover">
          <h1 className="text-2xl">{insideTitle?.toUpperCase()}</h1>
        </div>
      ) : (
        <div className="bg-slate-800 flex items-center justify-center h-[20rem] w-full object-cover">
          <Image 
            alt='card-title' 
            placeholder="blur" 
            blurDataURL="/assets/placeholder.png" 
            src={srcImage} 
            width={500} 
            height={500}
            className='h-full w-full'
            onError={() => setSrcImage('/assets/placeholder.png')}
          />
        </div>
      )}
      <h5 className="text-lg">{title}</h5>
    </div>
  )
}

export default Card;