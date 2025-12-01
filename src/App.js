import logo from './logo.svg';
import './App.css';

export const App = () => {
	const date = new Date();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<p className="App-link">{date.getFullYear()}</p>
			</header>
		</div>
	);
};
