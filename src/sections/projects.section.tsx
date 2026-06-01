import { SectionTitle } from '../components/section-title.component';

const projects = Array.from({ length: 6 }, (_, i) => ({
	title: `Project ${i + 1}`,
	href: 'https://example.com',
}));

export const Projects = () => {
	return (
		<section className='projects container' id='projects'>
			<div className='projects-content'>
				{projects.map((project, index) => {
					const isLeft = index % 2 === 0;
					return (
						<div className={`project-row ${isLeft ? 'row-start' : 'row-end'}`}>
							<a
								key={index}
								href={project.href}
								target='_blank'
								rel='noopener noreferrer'
								className='project-card'
							>
								<img src='/placeholder.png' alt={project.title} className='project-image' />
								<p className='project-title'>{project.title}</p>
								<p className='project-desc'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</a>
						</div>
					);
				})}
			</div>
			<div>
				<SectionTitle title='My' subTitle='PROJECTS' />
			</div>
		</section>
	);
};
