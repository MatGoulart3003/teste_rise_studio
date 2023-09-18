import styled from "styled-components";


export const Description = styled.h4`
    font-size: 32px;
    font-weight: 100;
    font-family: "Josefin Sans", Sans-serif;
    color: #bf9877;
`

export const DivContainer = styled.div`
    text-align: center;
    max-width: 80%;
    display: flex;
    margin: auto;
    align-items: center;
   
`
export const JoiaBox = styled.ul`
    display: flex;
    gap: 45px;
    flex-wrap: wrap;
    text-align: center;
`
export const JoiaItem = styled.li`
    padding: 10px;
    box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
` 

export const ButtonDiv = styled.div`
    display:block;
`

export const Button = styled.button`
    padding:20px;
    background-color: #fff;
    color: #4D734FD9;
    cursor: pointer;
    border-color:#4D734FD9;
    border-radius: 1px;
    border-style: solid;
    &:hover {
        background-color:#4D734FD9;
        color: #fff;
      }

`

export const ImageJoia = styled.img`
  width: 18rem; 
  height: 25rem;
 
`;

export const Value = styled.h4`
    font-size: 16px;
    font-style: bold;
    font-family: "Lato", Sans-serif;
    color: #7e7e7e;
`

export const DivElementAfterVideo = styled.div`
   
   padding-left: 50px;
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   border-left: solid 1px;
   border-color: #4D734FD9;
`
export const VivencieExperiencia = styled.h3`
    font-size: 24px;
    font-style: bold;
    font-family: "Lato", Sans-serif;
    color: #aeaeae;
`
export const ArteConquista = styled.h1`
    font-size: 40px;
    font-weight: normal;
    font-family: "Lato", Sans-serif;
    color:#4D734FD9;
    margin: 0;
`
export const Fabricacoes =  styled.h1`
    font-size: 32px;
    font-weight: 100;
    font-family: "Josefin Sans", Sans-serif;
    color: #bf9877;
`
export const DivFabricacoes = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   border-bottom: solid 1px;
   border-color: #4D734FD9;
   margin-bottom: 10px;
`
export const DivEspacadora = styled.div`
    margin-top: 120px;
    margin-bottom: 120px;
`