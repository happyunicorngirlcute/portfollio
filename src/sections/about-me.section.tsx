import { SectionTitle, } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Full Stack Developer',
				timePeriod: '2025 - Present',
				description: (
					<ul>
						<li>
							Created many small projects like{' '}
							<strong>Xeno</strong>, an AI that can build rich code. Specialized in backend
						</li>
						<li>
							Designed and developed several interactive data visualization dashboards.
						</li>
						<li>I also built this site, which is part of my projects.</li>
					</ul>
				),
			},
		],
	},

	{
		title: 'Education',
		items: [
			{
				title: 'Developer Training',
				place: 'Garage404, Saint Etienne Rue Tarentaize',
				timePeriod: '2025 - Present',
				description: "I recently joined this training to become a developer. I'm fascinated by backend development and aim to become a PHP expert.",
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>

						Hi, I'm Nahil, a Full Stack Developer
					</p>
					<p>
						I've been working with <strong>PHP</strong> and{' '}
						<strong>Tailwind</strong> for <strong>2 years</strong>,
						building back-end heavy websites
					</p>
					<p>
						I enjoy solving problems, learning new things, and experimenting with
						different technologies. When I'm not coding, I'm probably working on
						a personal project or exploring something new.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											| {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
