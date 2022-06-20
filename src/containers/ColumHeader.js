import React from "react";
import { useDispatch } from "react-redux";
import { trelloActions } from "../store/slices/trelloSlice";
import styled from "styled-components";

function ColumHeader({ item }) {
  const dispatch = useDispatch();
  return (
    <Header>
      {item.changeTitle ? (
        <input 
        className="title"
          value={item.title}
          autoFocus
          onBlur={() => dispatch(trelloActions.changeTitle({ id: item.id }))}
          onChange={(event) =>
            dispatch(
              trelloActions.addTitle({
                title: event.target.value,
                id: item.id,
              })
            )
          }
        />
      ) : (
        <p onClick={() => dispatch(trelloActions.changeTitle({ id: item.id }))}>
          {item.title}
        </p>
      )}
      <button
        onClick={() => dispatch(trelloActions.delButton({ id: item.id }))}
      >
        X
      </button>
    </Header>
  );
}

export default ColumHeader;

const Header = styled("div")`
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  padding: 5px;
  margin-bottom: 5px;
  .title {
    width: 200px;
    height: 25px;
    outline-color: #0079bf;
  }
  button {
    height: 25px;
    border: 1px solid #ebecf0;
    background-color: #ebecf0;
    cursor: pointer;
    :hover {
      background-color: #091e4214;
    }
  }
`;
