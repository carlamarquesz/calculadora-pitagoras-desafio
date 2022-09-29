import styled from 'styled-components';

export const Container = styled.div`
  display: flex; 
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin: 10rem auto; 
  max-width: 700px; 
  background: #F9F9F9;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.14);
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
export const Teclado = styled.div` 
  display: flex; 
  justify-content: center;
  flex-direction: row;
  align-items: center;  
  flex-wrap: wrap;   
  max-width: 600px;
`; 
// export const Triangulo = styled.div`
//   max-width:20rem;
//   padding: 20px;
// `; 
export const AcharHipotenusa = styled.div`
  display: flex;  
  flex-direction: column;   
  margin: 2rem;  
  align-content: center;
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
export const ButtonTeclado = styled.button`  
  width: 83px;
  height: 81px;  
  background: #FFFFFF;
  border: 1px solid #DBDBDB;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;  
  color: black;
  font-size: 1.6rem; 
  font-weight: 700;
  margin:  15px;
  cursor: pointer;
 
`;
export const ButtonTecladoCalcular = styled.button`  
  width: 310px;
  height: 81px;  
  background: #24A952;
  border: 1px solid #DBDBDB;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;  
  color: white;
  font-size: 1.6rem; 
  font-weight: 700;
  margin:  15px;
  cursor: pointer;
 
`; 
export const ButtonTecladoAC = styled.button`  
  width: 83px;
  height: 81px;  
  background: #24A952;
  border: 1px solid #DBDBDB;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;  
  color: white;
  font-size: 1.6rem; 
  font-weight: 700;
  margin:  15px;
  cursor: pointer;
 
`;

export const Hipotenusa = styled.h2` 
  position: absolute;
  margin-top: 7rem;
  margin-left: 8rem;
  
`; 
export const CatetoB = styled.h2` 
  position: absolute;
  margin-top: 7.5rem; 
  
`; 
export const CatetoC = styled.h2` 
  position: absolute;
  margin-top: 15.5rem;
  margin-left: 6rem;
  
`; 
export const ButtonMetaMask = styled(ButtonTeclado)``;
export const ButtonInsideMetaMask = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #291d32;
  min-height: 2.5rem;
  min-width: 20.8rem;
  border-radius: 4px;
  border: none;
  h1 {
    margin: 0;
    font-size: 1.1rem;
    background: -webkit-linear-gradient(135deg, #9a4dff 0%, #f600dd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  img{
    margin-left: 0.5rem;
  }
`;