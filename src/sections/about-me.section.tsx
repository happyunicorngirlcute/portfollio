import { SectionTitle } from '../components/section-title.component';
import { useLang } from '../i18n/context';

export const AboutMe = () => {
	const { t } = useLang();

	const timeline = [
		{
			title: t.about.experience,
			items: [
				{
					title: t.about.developer,
					timePeriod: '2025 - Present',
					description: (
						<ul>
							{t.about.experienceItems.map((item, i) => (
								<li key={i} dangerouslySetInnerHTML={{ __html: item }} />
							))}
						</ul>
					),
				},
			],
		},
		{
			title: t.about.education,
			items: [
				{
					title: t.about.developerTraining,
					place: 'Garage404, Saint Etienne Rue Tarentaize',
					timePeriod: '2025 - Present',
					description: t.about.garageDesc,
				},
			],
		},
	];

	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title={t.about.title}
					subTitle={t.about.subTitle}
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '24px' }} dangerouslySetInnerHTML={{ __html: t.about.intro1 }} />
					<p dangerouslySetInnerHTML={{ __html: t.about.intro2 }} />
					<p>{t.about.intro3}</p>
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
