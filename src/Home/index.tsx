import React, { useState } from 'react';
import { StyledTitle, StyledView } from './styles';
import Form from '../components/Form';
import ListItem from '../components/ListItem';

const Home: React.FC = () => {
	const [todos, setTodos] = useState<string[]>([]);

	return (
		<StyledView>
			<StyledTitle>Lista de Tarefas</StyledTitle>
			<Form todos={todos} setTodos={setTodos} />
			<ListItem todos={todos} />
		</StyledView>
	);
};

export default Home;
