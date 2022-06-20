import React from "react";
import styled from "styled-components";
import trello from "../assets/trello-logo-blue.svg";
import hero from "../assets/hero.webp";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate()
  return (
    <Block>
      <Header>
        <ul>
          <li>
            <img src={trello} />
          </li>
          <li>Функции</li>
          <li>Решения</li>
          <li>Планы</li>
          <li>Цены</li>
          <li>Ресурсы</li>
        </ul>
        <div>
          <button className="login" onClick={()=>navigate('/login')}>Войти</button>
          <button className="free">Получить Trello бесплатно</button>
        </div>
      </Header>
      <Main>
        <div className="content">
        <div>
          <h1>Trello помогает командам достигать успеха.</h1>
          <p>
            Объединяйте усилия, управляйте проектами и выводите продуктивность
            на новые высоты. Откуда бы вы ни работали — из офиса в небоскребе
            или из дома — ваш совместный труд неповторим. Добейтесь всех своих
            целей с Trello.
          </p>
          <div className="form">
            <input placeholder="Эл.почта" />
            <button>Зарегистрируйтесь — это бесплатно!</button>
          </div>
        </div>
        <img className="hero" src={hero} />
        </div>
      </Main>
    </Block>
  );
}

export default HomePage;

const Block = styled("div")`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const Header = styled("header")`
  width: 100vw;
  height: 60px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  :hover {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  img {
    width: 110px;
    height: 23px;
  }
  ul {
    width: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    font-size: 17px;
    li:hover {
      color: rgb(0, 101, 255);
    }
  }
  button {
    height: 60px;
    padding: 0 30px;
    font-size: 20px;
    border: none;
  }
  .login {
    background-color: white;
    cursor: pointer;
    :hover {
      background-color: #bdc3c7;
    }
  }
  .free {
    background-color: rgb(0, 101, 255);
    color: white;
  }
`;

const Main = styled("main")`
  width: 100%;
  background-color: #e9e4f0;
  height: 100vh;
  padding-top: 150px;
  .content{
    margin: auto;
    width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hero {
    width: 350px;
    height: 450px;
  }
  h1 {
    font-size: 50px;
    font-weight: 100;
    width: 500px;
    text-align: left;
  }
  p {
    width: 500px;
    text-align: left;
    margin-top: 20px;
    font-size: 18px;
    line-height: 1.5;
    text-size-adjust: 100%;
  }
  .form {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    input {
      width: 376px;
      height: 50px;
      font-size: 1rem;
      padding-left: 20px;
      border-radius: 5px;
      border: none;
    }
    button {
      margin-top: 20px;
      width: 303px;
      height: 50px;
      background-color: rgb(0, 101, 255);
      color: white;
      font-size: 1rem;
      border-radius: 5px;
      border: none;
    }
  }
`;
