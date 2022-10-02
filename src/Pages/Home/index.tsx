import React from "react";
import { useState } from "react";
import * as style from "./style";
import triangulo from "../../img/triangulo-retangulo.png";
import { MdCalculate } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";

export default function Home() {
  //Variáveis declaradas, referentes aos lados de um triangulo, e seus respectivos valores iniciais.
  const [hipotenusa, setHipotenusa] = useState(0);
  const [catetoB, setCatetoB] = useState(0);
  const [catetoC, setCatetoC] = useState(0);
  const [respostaCB, setRespostaCB] = useState("b");
  const [respostaCC, setRespostaCC] = useState("c");
  const [respostaH, setRespostaH] = useState("a");  
  let [message, setMessage] = useState(
    "O teorema de Pitágoras é uma expressão matemática que relaciona os lados de um triângulo retângulo, informe seus catetos para encontrar a hipotenusa. =D"
  );
  
  //Função a qual calcula a hipotenusa e os cateos.
  function Calcular() {
    //Condições necessárias para setar a variável.
    if (
      catetoB != 0 &&
      catetoC != 0 &&
      (hipotenusa == 0 || isNaN(hipotenusa))
    ) {
      setHipotenusa((catetoB ** 2 + catetoC ** 2) ** (1 / 2));
      setMessage(
        "Boaa, você encontrou a hipotenusa do triângulo retângulo! =D"
      );
    } else if (
      catetoB != 0 &&
      (catetoC == 0 || isNaN(catetoC)) &&
      hipotenusa != 0
    ) {
      setCatetoC((hipotenusa ** 2 - catetoB ** 2) ** (1 / 2));
      setMessage(
        "Você encontrou o valor correspondente ao cateto C. Muito bom!"
      );
    } else if (
      (catetoB == 0 || isNaN(catetoB)) &&
      catetoC != 0 &&
      hipotenusa != 0
    ) {
      setCatetoB((hipotenusa ** 2 - catetoC ** 2) ** (1 / 2));
      setMessage(
        "Você encontrou o valor correspondente ao cateto B. Muito bom!"
      );
    } else {
      alert(
        "Para encontrar o resultado de um dos lados do triangulo, escolha apenas 2 valores!"
      );
    }
  }
  //Função "clean", retornar as variáveis para seus estados iniciais.
  function Limpar() {
    setMessage(
      "O teorema de Pitágoras é uma expressão matemática que relaciona os lados de um triângulo retângulo, informe seus catetos para encontrar a hipotenusa. =D"
    );
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
          {/*Condições referentes as variáveis na imagem do triangulo*/}
          <style.Hipotenusa>
            {hipotenusa == 0 || isNaN(hipotenusa)
              ? respostaH
              : Number.isInteger(hipotenusa)
              ? hipotenusa
              : hipotenusa.toFixed(2)}
          </style.Hipotenusa>
          <style.CatetoB>
            {catetoB == 0 || isNaN(catetoB)
              ? respostaCB
              : Number.isInteger(catetoB)
              ? catetoB
              : catetoB.toFixed(2)}
          </style.CatetoB>
          <style.CatetoC>
            {catetoC == 0 || isNaN(catetoC)
              ? respostaCC
              : Number.isInteger(catetoC)
              ? catetoC
              : catetoC.toFixed(2)}
          </style.CatetoC>
          <img src={triangulo} />
        </style.AcharHipotenusa>
        <style.AcharHipotenusa>
          <label>
            Cateto <b>b:</b>
          </label>
          {/*Valor do campo input/atribuição do valor da variável*/}
          <style.Input
            type="number"
            placeholder={" "}
            value={catetoB}
            onChange={(e) => setCatetoB(parseFloat(e.target.value))}
          />
          <label>
            Cateto <b>c:</b>
          </label>
          <style.Input
            type="number"
            placeholder={" "}
            value={catetoC}
            onChange={(e) => setCatetoC(parseFloat(e.target.value))}
          />
          <label>
            Hipotenusa <b>a:</b>
          </label>
          <style.Input
            type="number"
            placeholder={" "}
            value={hipotenusa}
            onChange={(e) => setHipotenusa(parseFloat(e.target.value))}
          />
        </style.AcharHipotenusa>
      </style.Form>
      <style.Teclado>
        <style.ButtonTeclado onClick={Limpar}>
          <GrPowerReset />
          <p>Limpar</p>
        </style.ButtonTeclado>
        <style.ButtonTecladoCalcular onClick={Calcular}>
          <MdCalculate />
          <p>Calcular</p>
        </style.ButtonTecladoCalcular>
      </style.Teclado>
    </style.Container>
  );
}
