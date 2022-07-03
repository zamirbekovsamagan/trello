import styled from "styled-components";
import trello from "../assets/trello-logo-white.png";
import menu from "../assets/menu-logo.png";
import info from "../assets/info-logo.png";
import bell from "../assets/bell-logo.png";
import TrelloTodos from "./TrelloTodos";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";

function Trello() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  return (
    <Block>
      <Header>
        <div className="left">
          <div className="logos">
            <div className="burger">
              <Image src={menu} />
            </div>
            <div className="trello">
              <Image src={trello} />
              Trello
            </div>
          </div>
          <List>
            <li>Рабочие пространства </li>
            <li>Недавние</li>
            <li>Больше</li>
            <li>Создать</li>
          </List>
        </div>
        <div className="search">
          <Input placeholder="Поиск" onChange={(event)=>setSearch(event.target.value)} />
          <div><Image src={info} /></div>
          <div><Image src={bell} /></div>
          <button onClick={()=>navigate('/')}>Выйти</button>
        </div>
      </Header>
      <TrelloTodos search={search}/>
    </Block>
  )
}

export default Trello;

const Block = styled("div")`
  width: 100%;
  height: 100vh;
  background-image: url("https://cutewallpaper.org/21/trello-backgrounds/Trello-dark-theme-style-overrides-%CB%87-GitHub.jpg");
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: hidden;
  overflow-x: scroll;
  overflow-wrap: break-word;
`;

const Header = styled("header")`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: rgba(64, 95, 114, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .search {
    width: 320px;
    margin-right: 10px;
    button{
      padding: 5px;
      border-radius: 3px;
      border: none;
      margin-left: 5px;
    }
    div{
      padding: 7px;
      margin-left: 5px;
      border-radius: 3px;
      :hover{
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }
  .logos {
    width: 120px;
    margin-left: 10px;
    div{
      padding: 7px;
      border-radius: 3px;
      :hover{
      background-color: rgba(255, 255, 255, 0.2);
    }
    }
    .trello {
      width: 80px;
      padding: 5px;
      font-size: 20px;
      font-weight: bold;
      color: white;
    }
  }
`;
const Input = styled("input")`
  width: 250px;
  height: 34px;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.2);
  outline: none;
  padding-left: 20px;
  ::placeholder {
    color: white;
  }
  :focus {
    background-color: white;
  }
  :focus::placeholder {
    color: gray;
  }
`;

const Image = styled("img")`
  width: 20px;
  height: 20px;
`;

const List = styled("ul")`
  list-style: none;
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 16px;
  li {
    height: 34px;
    cursor: pointer;
    border-radius: 3px;
    padding: 7px 15px;
    :hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

