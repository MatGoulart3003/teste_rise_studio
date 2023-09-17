import Image from 'next/image'
import { Inter } from 'next/font/google'
import Video from '@/components/DivVideo/Video'
import InitialMenu from '@/components/InitialMenu/InitialMenu'
import ContactMenu from '@/components/ContactMenu/ContactMenu'
import DioCenter from '@/components/DioCenter/DioCenter'

export default function Home() {
  return (
    <div>
      <div>
        <Video/>
        <ContactMenu/>
        <InitialMenu/>
        <DioCenter/>      
      </div>
      <div>
        <h1>OI</h1>
      </div>
    </div>
    
  )
}
