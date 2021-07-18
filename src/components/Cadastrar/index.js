import { React, useState } from "react";
import * as Style from './styled';

export default function Cadastrar() {
  const [email, setEmail] = useState('');
  const [emailInserted, setEmailInserted] = useState(false);

  function saveEmail() {
    if (isValidEmail()) {
      localStorage.setItem('email', email);
      setEmailInserted(true);
      console.log(emailInserted);
      return true;
    }
    return false;

  }

  function isValidEmail() {
    const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return patternEmail.test(String(email).toLowerCase());
  }

  if (!emailInserted) {
    return (
      <>
        <Style.Section>
          <Style.Info>Cadastre-se para receber nossas promoções.</Style.Info>
          <Style.InputEmail type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite aqui seu email" />
          <Style.Button type="button" onClick={saveEmail}>CADASTRAR</Style.Button>
        </Style.Section>
      </>
    );
  } else {
    return (
      <Style.Section>
        <Style.Info>Obrigado por se cadastrar</Style.Info>
      </Style.Section>
    );
  }
}