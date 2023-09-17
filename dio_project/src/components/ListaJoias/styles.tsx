import styled from "styled-components";


export const Description = styled.h4`
    font-size: 32px;
    font-weight: 1;
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
    gap: 25px;
    flex-wrap: wrap;
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
  width: 300px; 
  height: 400px;
 // &:hover {
   // width: 350px; 
    //height: 450px;
 // }
`;

export const Value = styled.h4`
    font-size: 16px;
    font-style: bold;
    font-family: "Lato", Sans-serif;
    color: #7e7e7e;
`
