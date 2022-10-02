import styled from 'styled-components';

export const Container = styled.div`
  display: flex; 
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto; 
  max-width: 700px; 
  background: #F9F9F9;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.14);
  @media (max-width: 500px) { box-shadow: none; margin: 2rem auto; }
  border-radius: 30px;
  padding: 65px 0px;
`;

export const Title = styled.h1`
  color: black;
  text-align: center;
`; 

export const Subtitle = styled.p`
  padding:1rem 4.5rem;
  font-weight: 500;
  color: #505050;
  text-align: center;
`;
export const Form = styled.div` 
  display: flex; 
  justify-content: space-around;
  align-content: center;
  flex-direction: row;
  align-items: center;  
  flex-wrap: wrap;    
  
`; 
export const AcharHipotenusa = styled.div`
  display: flex;  
  flex-direction: column;   
  margin: 2rem;  
  align-content: center;
`; 
export const Hipotenusa = styled.h2` 
  position: absolute;
  margin-top: 7rem;
  margin-left: 8.5rem;
  
`; 
export const CatetoB = styled(Hipotenusa)` 
  margin-top: 8rem; 
  margin-left: 0rem;
  
`; 
export const CatetoC = styled(Hipotenusa)` 
  margin-top: 16rem;
  margin-left: 7rem;
  
`;  

export const Input = styled.input`
  border: 2px #DBDBDB solid;
  background: white;
  border-radius: 10px;  
  min-width: 13rem;
  height: 2rem;
  color: black;
  padding: 10px;
  margin: 0.5rem 0 1.5rem 0; 
  box-shadow: 0px 5.44492px 5.44492px rgba(0, 0, 0, 0.05); 
  :hover {
    border-color: #24A952;
  }
  :focus{
    outline: none;
    border-color: #24A952;
  }
`;  

export const Teclado = styled.div` 
  display: flex; 
  justify-content: center;
  flex-direction: row;
  align-items: center;  
  flex-wrap: wrap;   
  max-width: 600px;
`; 

export const ButtonTeclado = styled.button`  
  display: flex;
  justify-content: center;
  align-items: center; 
  max-width: 100%;
  width:13rem;
  height: 81px;  
  background: #FFFFFF;
  border: 1px solid #DBDBDB;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;  
  color: black;
  font-size: 1.4rem; 
  font-weight: 700;
  margin:  10px;
  cursor: pointer;
  :hover{
    transition: 0.2s;
    background: #f0f0f0; 
  }
  p{
    margin-left: 8px; 

  }
 
`;
export const ButtonTecladoCalcular = styled(ButtonTeclado)`  
  background: #24A952; 
  color: white; 
  :hover{
    transition: 0.2s;
    background: #0b9c3d; 
  } 
`; 



 