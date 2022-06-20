import React from "react";
import styled from "styled-components";
import Cart from "./Cart";
import { GrayButton } from "../components/StyledComponents";
import { useState } from "react";
import ColumHeader from "./ColumHeader";
import InputTitle from "./InputTitle";
import TodoLists from "./TodoLists";

function ColumnList({ item }) {
  const [isClick, setIsClick] = useState(false);

  const toggle = () => {
    setIsClick(!isClick);
  };

  return (
    <Column>
      {item.title ? (
        <div>
          <ColumHeader item={item}/>
          {item.lists.map((el) => {
            return <TodoLists key={el.id} item={item} el={el}/>;
          })}
          {!isClick ? (
            <GrayButton onClick={toggle}>Добавить карточку</GrayButton>
          ) : (
            <Cart id={item.id} />
          )}
        </div>
      ) : <InputTitle item={item}/>}
    </Column>
  );
}

export default ColumnList;

const Column = styled("div")`
  min-width: 250px;
  max-width: 280px;
  height: 100%;
  margin-right: 10px;
  padding: 5px;
  background-color: #ebecf0;
  border-radius: 3px;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 600px;
  .x-button {
    width: 240px;
    display: flex;
    align-items: center;
  }
  .x {
    margin-left: 10px;
    font-size: 20px;
    color: gray;
    border: none;
    cursor: pointer;
    :hover {
      color: black;
    }
  }
  .inputTitle {
    width: 240px;
    height: 40px;
    border-radius: 3px;
    outline: none;
    border: 2px solid gray;
    margin-bottom: 5px;
    :focus {
      border: 2px solid #0079bf;
    }
  }
`;


