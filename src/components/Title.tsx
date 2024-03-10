import Image from "next/image"
import { FC } from "react"

interface Props {
  readonly title: string
}

const Title: FC<Props> = ({ title }) => {
  return (
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="flex items-center gap-4">
        <span>Bima Febriansyah</span>
        <Image
          src="https://i.pravatar.cc/300"
          width={50}
          height={50}
          alt="avatar"
          className="rounded-full"
        />
      </div>
    </div>
  )
}

export default Title
