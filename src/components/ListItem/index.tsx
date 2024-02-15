import { StyledItem, StyledList } from './styles';

type ListItemProps = {
	todos: string[];
};

function ListItem(props: ListItemProps) {

  return (
    <StyledList>
      {props.todos.map((todo, index) => (
        <StyledItem key={index}>{todo}</StyledItem>
      ))}
    </StyledList>
  );
}

export default ListItem;



