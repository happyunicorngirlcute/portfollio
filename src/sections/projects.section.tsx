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
			siteUrl: 'https://example.com',
			sourceUrl: 'https://github.com/happyunicorngirlcute/Candy-Blossom',
			isSourceCodeAvailable: true,
			title: 'Candy Blossom',
			desc: 'Application that uses Perenual API to fetch informations about plants, then calculate and tell you how you should treat them, Project was made using NextJs, and Symfony. I also did a android version, which I used ExpoJs for that.',
			img: '/CandyBlossomScreenshot.png',
		},
		{
			siteUrl: '#',
			sourceUrl: 'https://github.com/happyunicorngirlcute/DevExpress',
			isSourceCodeAvailable: true,
			title: 'DevExpress',
			desc: 'My First NextJs project, I watched a youtube course in order to do it, all manually, I also learned how to use MONGODB and what is it, same for NextJs, the website is about showing conferences, and maybe join them',
			img: '/DevExpressScreenshot.png',
		},
		{
			siteUrl: 'https://magnesium.surge.sh',
			sourceUrl: '',
			isSourceCodeAvailable: false,
			title: 'Magnesium',
			desc: 'This is a project that was made with react and symfony (No NextJs), Postgre Database, Website that promotes a roblox exploit, license key system, admin system, reseller system, (even an age verification system, by using an api), source code is not available',
			img: '/MagnesiumScreenshot.png',
		},
		{
			siteUrl: '#',
			sourceUrl: 'https://github.com/user/solstice',
			isSourceCodeAvailable: true,
			title: 'Solstice',
			desc: 'Weather app with animated maps, 7-day forecasts, and location-based alerts.',
			img: '/placeholder.png',
		},
		{
			siteUrl: '#',
			sourceUrl: 'https://github.com/user/cipherkeep',
			isSourceCodeAvailable: true,
			title: 'CipherKeep',
			desc: 'End-to-end encrypted password manager with biometric auth and cloud sync.',
			img: '/placeholder.png',
		},
		{
			siteUrl: '#',
			sourceUrl: 'https://github.com/user/arcadia',
			isSourceCodeAvailable: true,
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
				<SectionTitle title='My' subTitle='PROJECTS' />
			</div>

			{openIndex !== null && projects[openIndex].isSourceCodeAvailable &&
				createPortal(
					<div className='popup-overlay' onClick={handleBackdropClick}>
						<div className='popup-card' onClick={(e) => e.stopPropagation()}>
							<p className='popup-text'>Want to check the source code?</p>
							<a
								href={projects[openIndex].sourceUrl}
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
