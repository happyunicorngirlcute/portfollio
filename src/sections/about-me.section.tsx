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
							Created and maintained web applications using <strong>Symfony</strong> and <strong>NextJs</strong>, did many small projects, showcased below tech stack.
						</li>
						<li>
							Designed and developed several mobile applications with <strong>ExpoJs</strong>, like Candy Blossom, an application that helps you take care of your plant.
						</li>
						<li>I also built this website, which is part of my projects.</li>
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
				description: "I recently joined this formation to become a developer. I'm fascinated by by coding and aim to become a backend expert, but I also enjoy frontend development and have experience with it.",
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
					<p style={{ marginTop: '24px' }}>

						Hi, I'm <strong>Nahil</strong>, a <strong>Full Stack Developer</strong>
					</p>
					<p>
						I've been working with many languages and frameworks over this year, I specifically love coding with <strong>Symfony</strong> and <strong>NextJs</strong>, but I also have experience with <strong>JavaScript</strong>, <strong>TypeScript</strong>,  <strong>React</strong>... And more!
					</p>
					<p>
						I enjoy solving problems, learning new things, and experimenting with
						different technologies. When I'm not coding, I'm probably working on
						a personal project or exploring something new. (That's a lie, I usually just play video games if not coding)
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
