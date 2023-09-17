import Image from 'next/image'
import { Inter } from 'next/font/google'
import Video from '@/components/DivVideo/Video'
import InitialMenu from '@/components/InitialMenu/InitialMenu'
import ContactMenu from '@/components/ContactMenu/ContactMenu'
import DioCenter from '@/components/DioCenter/DioCenter'
import { GetServerSideProps } from 'next'
import { api } from '@/Services/Api'
import ListaJoias from '@/components/ListaJoias/ListaJoias'
import Footer from '@/components/Footer/Footer'

export default function Home() {

  const consoleLogDoido = () => {
   }

  consoleLogDoido();
  return (
    <div>
      <section>
        <Video/>
        <ContactMenu/>
        <InitialMenu/>
        <DioCenter/>        
      </section>
      <section>
        <ListaJoias/>
      </section>
      <section>
        <Footer/>
        
      </section>
    </div>
    
  )
}

