import React from 'react'
import {ButtonCadastrar, DivBox, DivContainerFooter, DivDivider, DivMenu, ImagDio, InputEmail, MenuBox, MenuItem, Paragrafo, Title} from './styles'


export default function Footer (){

    return(
        <>
        <DivContainerFooter>
                <DivBox>
                    <ImagDio src='https://diojoiasemprata.com.br/wp-content/uploads/2021/12/dio-logo-600x210.png' />
                </DivBox>
                <DivBox>
                    <Title>sobre nós</Title>
                    <Paragrafo>Vivemos na época que a autoestima impacta diretamente a vida das pessoas.
                        Joias para todos os estilos, gostos e bolsos.</Paragrafo>           
                </DivBox>
                <DivBox>
                    <Title>fique por dentro de nossas novidades</Title>
                    <InputEmail type='email'></InputEmail>
                    <ButtonCadastrar>Cadastrar</ButtonCadastrar>
                </DivBox>                    
        </DivContainerFooter>
        <DivMenu>
            <DivDivider></DivDivider>
            <MenuBox>
                <MenuItem>Home</MenuItem>
                <MenuItem>Sobre nós</MenuItem>
                <MenuItem>Revenda</MenuItem>
                <MenuItem>Produtos</MenuItem>
                <MenuItem>Contato</MenuItem>
                <MenuItem>Política de Troca</MenuItem>
                <MenuItem>Política de Frete</MenuItem>
                <MenuItem>Prolitica de Privacidade</MenuItem>
            </MenuBox>
        </DivMenu>
    </>


    )
}
