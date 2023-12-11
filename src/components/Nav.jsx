import { useState } from 'react';
import { hamburger } from '../assets/icons';
import close from '../assets/icons/close.png';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import ThemeSwitcher from './ThemeSwitcher';

const Nav = () => {
	const [navShow, setNavShow] = useState(false);
	const [darkMood, setDarkMood] = useState(false);

	const toggleTheme = () => {
		document.documentElement.classList.toggle('dark');
		setDarkMood(!darkMood);
	};

	return (
		<header className="padding-x py-8 absolute z-10  top-0 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img
						src={headerLogo}
						alt="logo"
						width={129}
						height={29}
						className="m-0 w-[129px] h-[29px]"
					/>
				</a>

				<ul className={`nav-items ${navShow && 'shown'}`}>
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								onClick={() => setNavShow(!navShow)}
								className="font-montserrat leading-normal text-lg text-slate-gray cursor-pointer hover:text-gray-500"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>

				<div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden ">
					<a href="/">Sign in</a>
					<span>/</span>
					<a href="/">Explore now</a>
				</div>
				{/* Dark mood switcher */}
				<div className="flex gap-6 items-center justify-center">
					<ThemeSwitcher toggleTheme={toggleTheme} darkMood={darkMood} />

					<div
						className="hidden max-lg:block cursor-pointer"
						onClick={() => setNavShow(!navShow)}
					>
						<img
							src={navShow ? close : hamburger}
							alt="hamburger icon"
							width={25}
							height={25}
							className="dark:invert"
						/>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
