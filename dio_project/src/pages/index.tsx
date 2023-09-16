import Image from 'next/image'
import { Inter } from 'next/font/google'
import Video from '@/components/DivVideo/Video'
import InitialMenu from '@/components/InitialMenu/InitialMenu'

export default function Home() {
  return (
    <div>
      <Video/>
      <InitialMenu/>
    </div>
  )
}
