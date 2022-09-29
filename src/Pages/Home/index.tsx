import React from 'react';
import { Link } from 'react-router-dom';
import * as style from './style';
import triangulo from '../../img/triangulo.png';

 
export default function Home() {
  return (
    <style.Container> 
      <style.Title>Calculadora Pitágoras</style.Title> 
      <style.Subtitle>O teorema de Pitágoras é uma expressão matemática que relaciona os lados de um triângulo retângulo, conhecidos como hipotenusa e catetos.</style.Subtitle>
      <style.Form>   
        <style.AcharHipotenusa>
          <style.Hipotenusa>a</style.Hipotenusa>
          <style.CatetoB>b</style.CatetoB>
          <style.CatetoC>c</style.CatetoC>
          <img src={triangulo}/>   
        </style.AcharHipotenusa> 
        <style.AcharHipotenusa>
          <p>Cateto <b>b:</b></p>
          <style.Input placeholder={' '} />
          <p>Cateto <b>c:</b></p>
          <style.Input placeholder={' '} /> 
          <p>Hipotenusa <b>a:</b></p>
          <style.Input placeholder={' '} /> 
        </style.AcharHipotenusa>  
      </style.Form>    
      <style.Teclado>
        <style.ButtonTecladoAC>AC</style.ButtonTecladoAC>
        <style.ButtonTeclado>9</style.ButtonTeclado>
        <style.ButtonTeclado>8</style.ButtonTeclado>
        <style.ButtonTeclado>7</style.ButtonTeclado>
        <style.ButtonTeclado>6</style.ButtonTeclado>
        <style.ButtonTeclado>5</style.ButtonTeclado>
        <style.ButtonTeclado>4</style.ButtonTeclado>
        <style.ButtonTeclado>3</style.ButtonTeclado>
        <style.ButtonTeclado>2</style.ButtonTeclado>
        <style.ButtonTeclado>1</style.ButtonTeclado>
        <style.ButtonTeclado>0</style.ButtonTeclado>
        <style.ButtonTeclado>.</style.ButtonTeclado>
        <style.ButtonTecladoCalcular>Calcular</style.ButtonTecladoCalcular>
      </style.Teclado>   
    </style.Container>
  );
}
