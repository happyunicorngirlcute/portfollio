import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Lang } from '../components/language-switcher';
import { en } from './en';
import { fr } from './fr';

const translations = { en, fr };

type TranslationKeys = typeof en;

type LangContextType = {
	lang: Lang;
	setLang: (l: Lang) => void;
	t: TranslationKeys;
};

const LangContext = createContext<LangContextType | null>(null);

export const LangProvider = ({ children }: { children: ReactNode }) => {
	const [lang, setLang] = useState<Lang>('en');
	const t = translations[lang];

	return (
		<LangContext.Provider value={{ lang, setLang, t }}>
			{children}
		</LangContext.Provider>
	);
};

export const useLang = (): LangContextType => {
	const ctx = useContext(LangContext);
	if (!ctx) throw new Error('useLang must be used within LangProvider');
	return ctx;
};
