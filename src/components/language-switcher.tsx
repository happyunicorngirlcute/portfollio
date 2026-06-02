import { useState, useRef, useEffect } from 'react';
import '../styles/language-switcher.css';

export type Lang = 'en' | 'fr';

const languages: { code: Lang; label: string; flag: string }[] = [
	{ code: 'en', label: 'English', flag: '🇬🇧' },
	{ code: 'fr', label: 'Français', flag: '🇫🇷' },
];

export const LanguageSwitcher = () => {
	const [open, setOpen] = useState(false);
	const [current, setCurrent] = useState<Lang>('en');
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const active = languages.find((l) => l.code === current)!;

	return (
		<div className='lang-switcher' ref={ref}>
			<button
				className='lang-toggle'
				onClick={() => setOpen((prev) => !prev)}
				aria-expanded={open}
				aria-label='Switch language'
			>
				<span className='lang-toggle__icon'>{active.flag}</span>
				<span>{active.code.toUpperCase()}</span>
				<span className={`lang-toggle__arrow ${open ? 'lang-toggle__arrow--open' : ''}`}>
					▾
				</span>
			</button>

			{open && (
				<div className='lang-dropdown'>
					{languages.map((lang) => {
						const isActive = lang.code === current;
						return (
							<button
								key={lang.code}
								className={`lang-option ${isActive ? 'lang-option--active' : ''}`}
								onClick={() => {
									setCurrent(lang.code);
									setOpen(false);
								}}
							>
								<span>{lang.flag}</span>
								<span>{lang.label}</span>
								<span
									className={`lang-option__check ${isActive ? 'lang-option__check--visible' : ''}`}
								>
									✓
								</span>
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
};
