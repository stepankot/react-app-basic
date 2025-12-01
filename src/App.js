import logo from './logo.svg';
import './App.css';

export const App = () => {
	// Данный подход являеться императивным
	const date = new Date();
	const App = document.createElement('div');
	App.className = 'App';

	const Header = document.createElement('header');
	Header.className = 'App-header';
	const Logo = document.createElement('img');
	Logo.src = logo;
	Logo.className = 'App-logo';
	Logo.alt = 'logo';

	const Title = document.createElement('p');
	Title.textContent = date.getFullYear();

	Header.append(Logo);
	Header.append(Title);
	App.append(Header);

	return App;
};
