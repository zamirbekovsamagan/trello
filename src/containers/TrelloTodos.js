import TrelloTodo from "./TrelloTodo";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ColumnList from "./ColumnList";

function TrelloTodos({search}) {
  const buttons = useSelector((state) => state.trello.buttons);

  return (
    <List>
      {buttons.filter(el=>{
        if(search === ''){
          return el
        }else if(el.title){
          if(el.title.toLowerCase().includes(search.toLowerCase())){
          return el
          }
        }
      }).map((item) => {
        if (item.name === "list") {
          return <ColumnList key={item.id} item={item} 
          />
        } else {
          return <TrelloTodo key={item.id} />;
        }
      })}
    </List>
  );
}

export default TrelloTodos;

const List = styled("ul")`
  display: flex;
  margin: 70px 0px;
`;

