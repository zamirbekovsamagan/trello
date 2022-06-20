import styled from "styled-components";
import { createPortal } from "react-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { trelloActions } from "../../store/slices/trelloSlice";

function Backdrop({ listId, columnId }) {
  const dispatch = useDispatch();
  return (
    <Back
      onClick={() => dispatch(trelloActions.showModal({ listId, columnId }))}
    ></Back>
  );
}

function ModalOverlay({ title, heading, listId, columnId, description }) {
  const dispatch = useDispatch();
  const [descriptions, setDescriptions] = useState("");

  const inputChangeHandler = (event) => {
    setDescriptions(event.target.value);
  };

  const inputSaveHandler = (listId, columnId) => {
    dispatch(trelloActions.addDescription({ listId, columnId, descriptions }));
    dispatch(trelloActions.showModal({ listId, columnId }));
  };

  return (
    <Card>
      <p className="title">{title}</p>
      <p className="heading">
        в колонке <span>{heading}</span>
      </p>
      <div>
        <h1 className="description">Описание</h1>
        {!description ? (
          <textarea
            placeholder="Добавить более подробное описание…"
            onChange={inputChangeHandler}
            autoFocus
          />
        ) : (
          <p className="text">{description}</p>
        )}
      </div>
      <footer>
        <Button
          onClick={() =>
            dispatch(trelloActions.showModal({ listId, columnId }))
          }
        >
          {!description ? "Отмена" : "Закрыть"}
        </Button>
        {!description ? (
          <Button onClick={() => inputSaveHandler(listId, columnId)}>
            Сохранить
          </Button>
        ) : (
          ""
        )}
      </footer>
    </Card>
  );
}
const portalElement = document.getElementById("overlay");

function InputModal({ title, heading, listId, columnId, description }) {
  return (
    <>
      {createPortal(
        <Backdrop listId={listId} columnId={columnId} />,
        portalElement
      )}
      {createPortal(
        <ModalOverlay
          title={title}
          heading={heading}
          listId={listId}
          columnId={columnId}
          description={description}
        />,
        portalElement
      )}
    </>
  );
}

export default InputModal;

const Card = styled("div")`
  width: 500px;
  padding: 0 20px 20px 20px;
  border-radius: 5px;
  background-color: white;
  position: absolute;
  top: 100px;
  left: 33%;
  z-index: 11;
  .title {
    font-size: 20px;
    color: #172b4d;
  }
  .description {
    font-size: 20px;
    font-weight: 500;
    color: #172b4d;
  }
  .heading {
    color: #5e6c84;
    span {
      text-decoration: underline;
    }
  }
  textarea {
    max-width: 460px;
    min-width: 460px;
    height: 100px;
    border-radius: 3px;
    border: none;
    outline-color: #4c9aff;
    padding: 10px;
    background-color: #091e420a;
    box-shadow: 0 1px 0 #091e4240;
    margin-bottom: 10px;
  }
  .text {
    width: 460px;
    min-height: 50px;
    height: 100%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 10px;
    word-break: break-all;
  }
  footer {
    width: 460px;
    display: flex;
    justify-content: flex-end;
    button {
      margin-left: 10px;
    }
  }
`;

const Back = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
`;

const Button = styled("button")`
  width: 100px;
  height: 30px;
  background-color: #0079bf;
  border-radius: 3px;
  border: none;
  color: white;
`;
