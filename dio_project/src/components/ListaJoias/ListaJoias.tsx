import { api } from "@/Services/Api";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ArteConquista, Button, Description, DivContainer, DivElementAfterVideo, DivEspacadora, DivFabricacoes, Fabricacoes, ImageJoia, JoiaBox, JoiaItem, Value, VivencieExperiencia } from "./styles";

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
                <DivEspacadora>
                    <DivElementAfterVideo>
                        <VivencieExperiencia>VIVENCIE A EXPERIÊNCIA USANDO
                            NOSSAS JOIAS EM PRATA</VivencieExperiencia>
                        <ArteConquista>a arte que acompanha sua conquista</ArteConquista>
                    </DivElementAfterVideo>
                </DivEspacadora>
                <DivFabricacoes>
                    <Fabricacoes>fabricações</Fabricacoes>
                </DivFabricacoes>                
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

