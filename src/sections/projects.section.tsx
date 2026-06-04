import { useState } from 'react';
import { createPortal } from 'react-dom';
import { SectionTitle } from '../components/section-title.component';
import { useLang } from '../i18n/context';

export const Projects = () => {
	const { t } = useLang();
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleQuestionClick = (e: React.MouseEvent, index: number) => {
		e.preventDefault();
		e.stopPropagation();
		setOpenIndex(index);
	};

	const handleBackdropClick = () => {
		setOpenIndex(null);
	};

	const projects = [
		{
			siteUrl: 'https://example.com',
			sourceUrl: 'https://github.com/happyunicorngirlcute/Candy-Blossom',
			isSourceCodeAvailable: true,
			title: 'Candy Blossom',
			desc: t.projects.descriptions[0],
			img: '/CandyBlossomScreenshot.png',
		},
		{
			siteUrl: '#',
			sourceUrl: 'https://github.com/happyunicorngirlcute/DevExpress',
			isSourceCodeAvailable: true,
			title: 'DevExpress',
			desc: t.projects.descriptions[1],
			img: '/DevExpressScreenshot.png',
		},
		{
			siteUrl: 'https://magnesium.surge.sh',
			sourceUrl: '',
			isSourceCodeAvailable: false,
			title: 'Magnesium',
			desc: t.projects.descriptions[2],
			img: '/MagnesiumScreenshot.png',
		},
		{
			siteUrl: '#',
			sourceUrl: 'https://github.com/happyunicorngirlcute/Paiement-Collaboratif',
			isSourceCodeAvailable: true,
			title: 'Paye Ton Pote',
			desc: t.projects.descriptions[3],
			img: '/PayeTonPoteScreenshot.png',
		},

			{
			siteUrl: '#',
			sourceUrl: 'https://github.com/happyunicorngirlcute/Paiement-Collaboratif',
			isSourceCodeAvailable: true,
			title: 'Bob',
			desc: t.projects.descriptions[4],
			img: '/Bob.png',
		},
		// {
		// 	siteUrl: '#',
		// 	sourceUrl: 'https://github.com/user/cipherkeep',
		// 	isSourceCodeAvailable: true,
		// 	title: 'CipherKeep',
		// 	desc: 'End-to-end encrypted password manager with biometric auth and cloud sync.',
		// 	img: '/placeholder.png',
		// },
		// {
		// 	siteUrl: '#',
		// 	sourceUrl: 'https://github.com/user/arcadia',
		// 	isSourceCodeAvailable: true,
		// 	title: 'Arcadia',
		// 	desc: 'Social platform for game devs to share prototypes, get feedback, and collaborate.',
		// 	img: '/placeholder.png',
		// },
	];

	return (
		<section className='projects container' id='projects'>
			<div className='projects-content'>
				{projects.map((project, index) => (
					<div
						key={index}
						className={`project-row ${index % 2 === 0 ? 'row-start' : 'row-end'}`}
					>
						<a
							href={project.siteUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='project-card'
						>
							<div className='project-image-wrapper'>
								<img
									src={project.img}
									alt={project.title}
									className='project-image'
								/>
								{project.isSourceCodeAvailable && (
									<button
										className='project-question-btn'
										onClick={(e) => handleQuestionClick(e, index)}
									>
										?
									</button>
								)}
							</div>
							<p className='project-title'>{project.title}</p>
							<p className='project-desc'>{project.desc}</p>
						</a>
					</div>
				))}
			</div>
			<div>
				<SectionTitle title={t.projects.title} subTitle={t.projects.subTitle} />
			</div>

			{openIndex !== null && projects[openIndex].isSourceCodeAvailable &&
				createPortal(
					<div className='popup-overlay' onClick={handleBackdropClick}>
						<div className='popup-card' onClick={(e) => e.stopPropagation()}>
							<p className='popup-text'>{t.projects.popup}</p>
							<a
								href={projects[openIndex].sourceUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='popup-btn'
							>
								{t.projects.viewSource}
							</a>
						</div>
					</div>,
					document.body
				)}
		</section>
	);
};
