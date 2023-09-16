import React from 'react'
import { NavItem, Navbar } from './styles'

export default function InitialMenu (){
    return(
        <div>
            <Navbar>
                <NavItem href="">Home</NavItem>
                <NavItem href="">Sobre Nós</NavItem>
                <NavItem href="">Seja um Representante</NavItem>
                <NavItem href="">Produtos</NavItem>        
                <NavItem href="">Contato</NavItem>        
            </Navbar>
        </div>
    );
    

}