import React from "react";
import { useDispatch } from "react-redux";
import { trelloActions } from "../store/slices/trelloSlice";
import { useState } from "react";
import styled from "styled-components";

function InputTitle({item}) {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const clickHandler = (id) => {
    dispatch(trelloActions.addTitle({ title, id }));
    if (title) {
      dispatch(
        trelloActions.addbt({
          name: "list",
          id: Math.random().toString(),
          title: "",
          changeTitle: false,
          lists: [],
        })
      );
    }
  };
  return (
    <div>
      <input 
      className="inputTitle"
        placeholder="Ввести заголовок списка"
        onChange={titleChangeHandler}
        autoFocus
      />
      <div className="x-button">
        <Button onClick={() => clickHandler(item.id)}>Добавить в список</Button>
        <button
          className="x"
          onClick={() =>
            dispatch(
              trelloActions.addButton({
                name: "button",
              })
            )
          }
        >
          X
        </button>
      </div>
    </div>
  );
}

export default InputTitle;

export const Button = styled("button")`
  width: 150px;
  height: 40px;
  border-radius: 3px;
  float: left;
  border: none;
  color: white;
  cursor: pointer;
  background-color: #0079bf;
`;
