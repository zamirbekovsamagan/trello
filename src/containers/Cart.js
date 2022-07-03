import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { trelloActions } from "../store/slices/trelloSlice";
import { GrayButton } from "./ColumnList";
import { Button } from "./InputTitle";
import styled from "styled-components";

function Cart(props) {
  const [list, setList] = useState({});
  const [showInput, setShowInput] = useState(true);
  const dispatch = useDispatch();

  const inputChangeHandler = (event) => {
    setList({
      list: event.target.value,
      description: "",
      showModal:false,
      id: Math.random().toString(),
    });
  };

  const addList = (id) => {
    dispatch(trelloActions.addToList({ list, id }));
    setList({ list: "" });
  };

  return (
    <>
      {showInput ? (
        <Div>
          <textarea
            value={list.list}
            onChange={inputChangeHandler}
            autoFocus
            placeholder="Ввести заголовок для этой карточки"
          />
          <div>
            <Button onClick={() => addList(props.id)}>Добавить карточку</Button>
            <button className="x" onClick={() => setShowInput(!showInput)}>
              X
            </button>
            <span>...</span>
          </div>
        </Div>
      ) : (
        <GrayButton onClick={() => setShowInput(!showInput)}>
          + Добавить карточку
        </GrayButton>
      )}
    </>
  );
}

export default Cart;

const Div = styled("div")`
  width: 240px;
  textarea {
    max-width: 240px;
    min-width: 240px;
    height: 50px;
    padding: 7px;
    overflow: hidden;
    border-radius: 3px;
    border: none;
    outline: none;
    box-shadow: 0 1px 0 #091e4240;
  }
  div {
    width: 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 30px;
    }
    .x {
      font-size: 20px;
      color: gray;
      border: none;
      cursor: pointer;
      :hover {
        color: black;
      }
    }
  }
`;
