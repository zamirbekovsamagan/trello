import React from "react";
import { useDispatch } from "react-redux";
import InputModal from "../components/UI/InputModal";
import { trelloActions } from "../store/slices/trelloSlice";
import styled from "styled-components";

function TodoLists({item, el}) {
    const dispatch = useDispatch()
  return (
    <Lists>
      {el.showModal && (
        <InputModal
          title={el.list}
          heading={item.title}
          listId={el.id}
          columnId={item.id}
          description={el.description}
        />
      )}
      <span
        onClick={() =>
          dispatch(
            trelloActions.showModal({
              listId: el.id,
              columnId: item.id,
            })
          )
        }
      >
        {el.list}
      </span>
      <button
        onClick={() =>
          dispatch(trelloActions.delList({ listId: el.id, columnId: item.id }))
        }
      >
        X
      </button>
    </Lists>
  );
}

export default TodoLists;

const Lists = styled("div")`
  width: 240px;
  height: 35px;
  background-color: white;
  color: #172b4d;
  border-radius: 3px;
  margin-bottom: 7px;
  padding: 7px;
  box-shadow: 0 1px 0 #091e4240;
  display: flex;
  justify-content: space-between;
  span {
    color: #5e6c84;
  }
  button {
    border: 1px solid #ebecf0;
    background-color: #ebecf0;
    cursor: pointer;
  }
`;
