import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as style from "./style";
import triangulo from "../../img/triangulo-retangulo.png";  
import { MdCalculate } from 'react-icons/md';
import { GrPowerReset } from 'react-icons/gr';


export default function Home() {
  const [hipotenusa, setHipotenusa] = useState(0);
  const [catetoB, setCatetoB] = useState(0);
  const [catetoC, setCatetoC] = useState(0);
  const [RespostaCB, setRespostaCB] = useState("b");
  const [RespostaCC, setRespostaCC] = useState("c");
  const [RespostaH, setRespostaH] = useState("a");
  let [message, setMessage] = useState("O teorema de Pitágoras é uma expressão matemática que relaciona os lados de um triângulo retângulo, informe seus catetos para encontrar a hipotenusa. =D"); 
  function calcular() {
    if((catetoB != 0) && (catetoC != 0) && (hipotenusa == 0 || isNaN(hipotenusa))){
      setHipotenusa((catetoB ** 2 + catetoC ** 2) ** (1 / 2));
      setMessage('Boaa, você encontrou a hipotenusa do triângulo retângulo! =D'); 
    } else if((catetoB != 0) && (catetoC == 0 || isNaN(catetoC)) && (hipotenusa != 0)){
      setCatetoC((hipotenusa ** 2 - catetoB ** 2) ** (1 / 2));
      setMessage('Você encontrou o valor correspondente ao Cateto C. Muito bom!');
    } else if((catetoB == 0 || isNaN(catetoB)) && (catetoC != 0) && (hipotenusa != 0)){
      setCatetoB((hipotenusa ** 2 - catetoC ** 2) ** (1 / 2));
      setMessage('Você encontrou o valor correspondente ao cateto B. Muito bom!');
    }else{
      alert('Para encontrar o resultado de um dos lados do triangulo, escolha apenas 2 valores!');
    }
  }

  function limpar() {
    setMessage("O teorema de Pitágoras é uma expressão matemática que relaciona os lados de um triângulo retângulo, informe seus catetos para encontrar a hipotenusa. =D")
    setCatetoB(0);
    setCatetoC(0);
    setHipotenusa(0);
  }

  return (
    <style.Container>
      <style.Title>Calculadora Pitágoras</style.Title>
      <style.Subtitle>{message}</style.Subtitle>
      <style.Form>
        <style.AcharHipotenusa>
          <style.Hipotenusa>{hipotenusa == 0 || isNaN(hipotenusa) ? RespostaH : Number.isInteger(hipotenusa) ? hipotenusa : hipotenusa.toFixed(2)}</style.Hipotenusa>
          <style.CatetoB>{catetoB == 0 || isNaN(catetoB) ? RespostaCB : Number.isInteger(catetoB) ? catetoB : catetoB.toFixed(2)}</style.CatetoB>
          <style.CatetoC>{catetoC == 0 || isNaN(catetoC) ? RespostaCC : Number.isInteger(catetoC) ? catetoC : catetoC.toFixed(2)}</style.CatetoC>
          <img src={triangulo} />
        </style.AcharHipotenusa>
        <style.AcharHipotenusa>
          <label>Cateto <b>b:</b></label>
          <style.Input type="number" placeholder={" "} value={catetoB} onChange={(e) => setCatetoB(parseFloat(e.target.value))}/>
          <label>Cateto <b>c:</b></label>
          <style.Input type="number" placeholder={" "} value={catetoC} onChange={(e) => setCatetoC(parseFloat(e.target.value))}/>
          <label>Hipotenusa <b>a:</b></label>
          <style.Input type="number" placeholder={" "} value={hipotenusa} onChange={(e) => setHipotenusa(parseFloat(e.target.value))} />
        </style.AcharHipotenusa>
      </style.Form>
      <style.Teclado>
        <style.ButtonTeclado onClick={limpar}><GrPowerReset/><p>Limpar</p></style.ButtonTeclado> 
        <style.ButtonTecladoCalcular onClick={calcular}><MdCalculate/><p>Calcular</p></style.ButtonTecladoCalcular>
      </style.Teclado>
    </style.Container>
  );
}
