import React from 'react'
import { DivCenter, Dio, DioDiv, ButtonDiv, Description, Button } from './styles'

export default function DioCenter (){
    return(
        <DivCenter>
           <DioDiv>
                <Dio>diô</Dio>
           </DioDiv>
           <ButtonDiv>
                <Description>joias em prata personalizadas para seu gosto</Description>
                <Button>FAÇA AGORA SEU PEDIDO!</Button>
           </ButtonDiv>

        </DivCenter>
 
    );

}