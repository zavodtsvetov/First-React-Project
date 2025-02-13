import ReactLogo from './assets/react.svg?react'
import reactLogo from './assets/react.svg';

export const App = () => {
	return (
		<div className="App">
			<p>Hello World</p>
			<img src={reactLogo} alt="react Logo" />
				<ReactLogo/>
		</div>
	);
};
