import styled, { css } from "styled-components";

const Button = styled.button<IButton>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 0.75em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
};


.button--primary {
  color: white;
  background-image: linear-gradient(to bottom right, #28256a,#5166b9);
}
.button--secondary {
  color: white;
  background-image: linear-gradient(to bottom left, #617cea, #617cea);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.button--small {
  font-size: 12px;
  padding: 12px 25px;
}
.button--medium {
  font-size: 14px;
  padding: 15px 50px;
}
.button--large {
  font-size: 16px;
  padding: 18px 75px;
}
