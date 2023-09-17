import { api } from "@/Services/Api";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button, Description, DivContainer, ImageJoia, JoiaBox, JoiaItem, Value } from "./styles";

export default function ListaJoias (){

    const [joias, setJoia] = useState<object[]>([])
    
    useEffect(()=>{
        getJoias();
    })

    const getJoias = async() => {
    try{
        const response = await api.get("")
        const data = response.data.data.featured;
        setJoia(data);
        
    }catch(error){
        console.log(error)
    }         
}
return(
        
        <DivContainer>
            <div>
                <div>
                    <h3>VIVENCIE A EXPERIÊNCIA USANDO NOSSAS JOIAS EM PRATA</h3>
                    <h1>a arte que acompanha sua conquista</h1>
                </div>
                <div>
                    <h1>Fabricações</h1>
                </div>                
                <JoiaBox>
                    {joias.map((joia)=>( 
                        <JoiaItem key={joia.id}>
                            <ImageJoia src={joia.thumb.file_url}/>
                            <Description> {joia.title} </Description>
                            <Value> R$: {joia.value} </Value>
                            <Button>Comprar</Button>
                        </JoiaItem>
                    ))}
                </JoiaBox>        
            </div>
           </DivContainer>
    )

}

