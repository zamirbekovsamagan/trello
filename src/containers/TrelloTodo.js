import styled from "styled-components";
import { useDispatch, useSelector} from "react-redux";
import { trelloActions } from "../store/slices/trelloSlice";

function TrelloTodo() {
  const dispatch = useDispatch();
  const length = useSelector(state=> state.trello.buttons.length)
  let title = length > 1 ? '+ Добавте еще одну колонку' : '+ Добавить список'
  return (
    <AddButton
      onClick={() =>
        dispatch(
          trelloActions.addButton({
              name: "list",
              id: Math.random().toString(),
              title:'',
              lists: []
          })
        )
      }
    >
      {title}
    </AddButton>
  );
}

export default TrelloTodo;

const AddButton = styled("button")`
  min-width: 250px;
  height: 40px;
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  font-size: 15px;
  padding: 10px;
  cursor: pointer;
  color: white;
  display: flex;
  :hover {
    background-color: #ffffff52;
  }
`;
