import React, { Fragment } from 'react';
import Home from './Home';
import GlobalStyle from './styles/globalStyles';

const App: React.FC = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Home />
		</Fragment>
	);
};

export default App;
