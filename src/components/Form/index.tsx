import { useState } from 'react';
import { StyledButton, StyledForm, StyledInput } from './styles';
import { FaPlus } from 'react-icons/fa';

type FormProps = {
	todos: string[];
	setTodos: (args: string[]) => void;
};

function Form(props: FormProps) {
	const [value, setValue] = useState<string>('');

	const handleSubmit = (event: any) => {
		event.preventDefault();
		if (!!value) {
			props.setTodos([...props.todos, value]);
			setValue('');
		}
		return;
	};
	return (
		<StyledForm onSubmit={(event) => handleSubmit(event)}>
			<StyledInput type="text" value={value} onChange={(event) => setValue(event.target.value)} />
			<StyledButton type="submit">
				<FaPlus />
			</StyledButton>
		</StyledForm>
	);
}

export default Form;
