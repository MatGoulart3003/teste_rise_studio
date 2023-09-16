import React from 'react'
import { Container, VideoJoia } from './styles'
import InitialMenu from '../InitialMenu/InitialMenu'

export default function Video (){
    return(
        <Container>
            <VideoJoia src="https://job.risestudio.com.br/uploads/cd3fdd60e336fafaae78-banner.mp4" autoPlay loop muted/>
        </Container>
    )    

}