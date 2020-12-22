import React from "react";
import { FooterBase } from "./styles";

function Footer() {
  return (
    <FooterBase>
      <p>
        {"Orgulhosamente criado por "}
        <a
          href="https://www.linkedin.com/in/adailsonaguiar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Adailson Aguiar</strong>
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
