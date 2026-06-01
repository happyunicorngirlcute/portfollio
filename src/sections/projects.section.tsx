import { SectionTitle } from '../components/section-title.component';

export const Projects = () => {
	return (
		<section className='projects container' id='projects'>
			<div className='projects-content'>
				<div className='project-row row-start'>
					<a
						href='https://github.com/user/project-alpha'
						target='_blank'
						rel='noopener noreferrer'
						className='project-card'
					>
						<img src='/bigrat.png' alt='Flowboard' className='project-image' />
						<p className='project-title'>Candy Blossom</p>
						<p className='project-desc'>
							Application that uses Perenual API to fetch informations about plants, then calculate and tell you how you should treat them, Project was made using NextJs, and Symfony. I also did a android version, which I used ExpoJs for that.
						</p>
					</a>
				</div>
				<div className='project-row row-end'>
					<a
						href='https://github.com/user/pulse'
						target='_blank'
						rel='noopener noreferrer'
						className='project-card'
					>
						<img src='/placeholder.png' alt='Pulse' className='project-image' />
						<p className='project-title'>Pulse</p>
						<p className='project-desc'>
							Real-time heartbeat monitor for server uptime, using WebSockets and D3
							charts.
						</p>
					</a>
				</div>
				<div className='project-row row-start'>
					<a
						href='https://github.com/user/meridian'
						target='_blank'
						rel='noopener noreferrer'
						className='project-card'
					>
						<img src='/placeholder.png' alt='Meridian' className='project-image' />
						<p className='project-title'>Meridian</p>
						<p className='project-desc'>
							E-commerce backend with Stripe integration, inventory management, and
							admin dashboards.
						</p>
					</a>
				</div>
				<div className='project-row row-end'>
					<a
						href='https://github.com/user/solstice'
						target='_blank'
						rel='noopener noreferrer'
						className='project-card'
					>
						<img src='/placeholder.png' alt='Solstice' className='project-image' />
						<p className='project-title'>Solstice</p>
						<p className='project-desc'>
							Weather app with animated maps, 7-day forecasts, and location-based
							alerts.
						</p>
					</a>
				</div>
				<div className='project-row row-start'>
					<a
						href='https://github.com/user/cipherkeep'
						target='_blank'
						rel='noopener noreferrer'
						className='project-card'
					>
						<img src='/placeholder.png' alt='CipherKeep' className='project-image' />
						<p className='project-title'>CipherKeep</p>
						<p className='project-desc'>
							End-to-end encrypted password manager with biometric auth and cloud
							sync.
						</p>
					</a>
				</div>
				<div className='project-row row-end'>
					<a
						href='https://github.com/user/arcadia'
						target='_blank'
						rel='noopener noreferrer'
						className='project-card'
					>
						<img src='/placeholder.png' alt='Arcadia' className='project-image' />
						<p className='project-title'>Arcadia</p>
						<p className='project-desc'>
							Social platform for game devs to share prototypes, get feedback, and
							collaborate.
						</p>
					</a>
				</div>
			</div>
			<div>
				<SectionTitle title='My' subTitle='PROJECTS' />
			</div>
		</section>
	);
};
