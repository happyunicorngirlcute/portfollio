import { useState } from 'react';
import { createPortal } from 'react-dom';
import { SectionTitle } from '../components/section-title.component';

export const Projects = () => {
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
			href: 'https://github.com/happyunicorngirlcute/Candy-Blossom',
			title: 'Candy Blossom',
			desc: 'Application that uses Perenual API to fetch informations about plants, then calculate and tell you how you should treat them, Project was made using NextJs, and Symfony. I also did a android version, which I used ExpoJs for that.',
			img: '/CandyBlossomScreenshot.png',
		},
		{
			href: 'https://github.com/user/pulse',
			title: 'Pulse',
			desc: 'Real-time heartbeat monitor for server uptime, using WebSockets and D3 charts.',
			img: '/placeholder.png',
		},
		{
			href: 'https://github.com/user/meridian',
			title: 'Meridian',
			desc: 'E-commerce backend with Stripe integration, inventory management, and admin dashboards.',
			img: '/placeholder.png',
		},
		{
			href: 'https://github.com/user/solstice',
			title: 'Solstice',
			desc: 'Weather app with animated maps, 7-day forecasts, and location-based alerts.',
			img: '/placeholder.png',
		},
		{
			href: 'https://github.com/user/cipherkeep',
			title: 'CipherKeep',
			desc: 'End-to-end encrypted password manager with biometric auth and cloud sync.',
			img: '/placeholder.png',
		},
		{
			href: 'https://github.com/user/arcadia',
			title: 'Arcadia',
			desc: 'Social platform for game devs to share prototypes, get feedback, and collaborate.',
			img: '/placeholder.png',
		},
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
							href={project.href}
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
								<button
									className='project-question-btn'
									onClick={(e) => handleQuestionClick(e, index)}
								>
									?
								</button>
							</div>
							<p className='project-title'>{project.title}</p>
							<p className='project-desc'>{project.desc}</p>
						</a>
					</div>
				))}
			</div>
			<div>
				<SectionTitle title='My' subTitle='PROJECTS' />
			</div>

			{openIndex !== null &&
				createPortal(
					<div className='popup-overlay' onClick={handleBackdropClick}>
						<div className='popup-card' onClick={(e) => e.stopPropagation()}>
							<p className='popup-text'>Want to check the source code?</p>
							<a
								href={projects[openIndex].href}
								target='_blank'
								rel='noopener noreferrer'
								className='popup-btn'
							>
								View Source
							</a>
						</div>
					</div>,
					document.body
				)}
		</section>
	);
};
