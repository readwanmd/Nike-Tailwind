import { moon, sun } from '../assets/icons';

const ThemeSwitcher = ({ toggleTheme, darkMood }) => {
	return (
		<button
			onClick={toggleTheme}
			className="lg:mx-4 p-2 bg-gray-400 dark:bg-gray-800 rounded-md hover:bg-gray-500 dark:hover:bg-gray-700 focus:outline-none"
		>
			<img
				src={darkMood ? sun : moon}
				width={24}
				height={24}
				className="dark:invert"
			/>
		</button>
	);
};
export default ThemeSwitcher;
