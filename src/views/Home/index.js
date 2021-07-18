import React from "react"
import Promocoes from "../../components/Promocoes"
import Cadastrar from "../../components/Cadastrar";
import * as Style from "./styled";

export default function Home() {
  return (
    <>
      <Style.BoxTitle>
        <Style.Title>BLACK FRIDAY <br />LEAGUE OF LEGENDS</Style.Title>
      </Style.BoxTitle>
      <Cadastrar></Cadastrar>
      <Promocoes></Promocoes>

    </>
  )
}