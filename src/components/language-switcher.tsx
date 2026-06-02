import { useState, useRef, useEffect } from 'react';
import { useLang } from '../i18n/context';
import '../styles/language-switcher.css';

export type Lang = 'en' | 'fr';

const languages: { code: Lang; label: string }[] = [
	{ code: 'en', label: 'English' },
	{ code: 'fr', label: 'Français' },
];

export const LanguageSwitcher = () => {
	const [open, setOpen] = useState(false);
	const { lang, setLang } = useLang();
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

	const active = languages.find((l) => l.code === lang)!;

	return (
		<div className='lang-switcher' ref={ref}>
			<button
				className='lang-toggle'
				onClick={() => setOpen((prev) => !prev)}
				aria-expanded={open}
				aria-label='Switch language'
			>
				<span>{active.label}</span>
				<span className={`lang-toggle__arrow ${open ? 'lang-toggle__arrow--open' : ''}`}>
					▾
				</span>
			</button>

			{open && (
				<div className='lang-dropdown'>
					{languages.map((l) => {
						const isActive = l.code === lang;
						return (
							<button
								key={l.code}
								className={`lang-option ${isActive ? 'lang-option--active' : ''}`}
								onClick={() => {
									setLang(l.code);
									setOpen(false);
								}}
							>
								{l.label}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
};
