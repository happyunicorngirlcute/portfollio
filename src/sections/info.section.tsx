import { FaGithub} from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { useLang } from '../i18n/context';

export const InfoSection = () => {
	const { t } = useLang();

	return (
		<div className='hero-section'>
			<FloatingButton
				label='About Me'
				className='first'
				href='/#about-me'
			/>
			<p>{t.hero.myNameIs}</p>
			<p className='name'>{t.hero.name}</p>
			<p>{t.hero.title}</p>
			<FloatingButton
				label='Tech'
				className='sec'
				href='/#tech-stack'
			/>

			<div className='blur'></div>
			<div className='bottom-bar'>
				<GlowLink
					href='https://github.com/happyunicorngirlcute'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
					aria-label='github'
				/>
				
				<GlowLink
					href='mailto:nahildiabi8@gmail.com'
					icon={<IoMailOutline color='rgb(248, 151, 0)' />}
					color='rgba(248, 151, 0, 0.7)'
					aria-label='mail'
				/>
			</div>
		</div>
	);
};
