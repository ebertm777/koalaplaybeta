import React from 'react';
import { FooterBase, Autor } from './styles';

function Footer() {
  return (
    <FooterBase>
      <Autor>
        &copy; 2020 | Koalas
      </Autor>
      <hr style={{ margin: "0 5%" }} />
      <p>
        Criado por <a href="https://github.com/ebertm777/">
          <img src="https://i.imgur.com/KmngC2j.png" alt="ebertm777" />
        </a> usando <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">JavaScript</a> e
        {' '}
        <a href="https://pt-br.reactjs.org/">
          React
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
