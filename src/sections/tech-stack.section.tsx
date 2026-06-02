import { FiUploadCloud } from 'react-icons/fi';
import { FaCss3Alt, FaHtml5, FaJs, FaPhp, FaReact } from 'react-icons/fa';
import { SiDocker, SiExpo, SiFigma, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiRailway, SiRender, SiSymfony, SiTailwindcss, SiTypescript, SiVercel, SiYaml } from 'react-icons/si';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Languages & Runtimes I work With',
		items: [
			{
				title: 'PHP',
				icon: <FaPhp color='rgb(119, 123, 179)' />,
				color: 'rgba(119, 123, 179, 0.6)',
			},
			{
				title: 'HTML',
				icon: <FaHtml5 color='rgb(228, 77, 38)' />,
				color: 'rgba(228, 77, 38, 0.6)',
			},
			{
				title: 'CSS',
				icon: <FaCss3Alt color='rgb(38, 77, 228)' />,
				color: 'rgba(38, 77, 228, 0.6)',
			},
			{
				title: 'JavaScript',
				icon: <FaJs color='rgb(240, 219, 79)' />,
				color: 'rgba(240, 219, 79, 0.6)',
			},
			{
				title: 'TypeScript',
				icon: <SiTypescript color='rgb(49, 120, 198)' />,
				color: 'rgba(49, 120, 198, 0.6)',
			},
			{
				title: 'Docker',
				icon: <SiDocker color='rgb(13, 109, 253)' />,
				color: 'rgba(13, 109, 253, 0.6)',
			},
			{
				title: 'YAML',
				icon: <SiYaml color='rgb(203, 55, 55)' />,
				color: 'rgba(203, 55, 55, 0.6)',
			},
			{
				title: 'Node.js',
				icon: <SiNodedotjs color='rgb(83, 163, 83)' />,
				color: 'rgba(83, 163, 83, 0.6)',
			},
		],
	},
	{
		heading: 'Frameworks & Tools',
		items: [
			{
				title: 'React',
				icon: <FaReact color='rgb(97, 219, 251)' />,
				color: 'rgba(97, 219, 251, 0.6)',
			},
			{
				title: 'Next.js',
				icon: <SiNextdotjs color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.6)',
			},
			{
				title: 'Expo.js',
				icon: <SiExpo color='rgb(200, 200, 200)' />,
				color: 'rgba(200, 200, 200, 0.6)',
			},
			{
				title: 'Symfony',
				icon: <SiSymfony color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.6)',
			},
			{
				title: 'Tailwind CSS',
				icon: <SiTailwindcss color='rgb(6, 182, 212)' />,
				color: 'rgba(6, 182, 212, 0.7)',
			},
			{
				title: 'Figma',
				icon: <SiFigma color='rgb(242, 78, 30)' />,
				color: 'rgba(242, 78, 30, 0.6)',
			},
		],
	},
	{
		heading: 'Databases I Use',
		items: [
			{
				title: 'MySQL',
				icon: <SiMysql color='rgb(0, 122, 158)' />,
				color: 'rgba(0, 122, 158, 0.75)',
			},
			{
				title: 'MongoDB',
				icon: <SiMongodb color='rgb(77, 205, 100)' />,
				color: 'rgba(77, 205, 100, 0.65)',
			},
			{
				title: 'PostgreSQL',
				icon: <SiPostgresql color='rgb(51, 103, 145)' />,
				color: 'rgba(51, 103, 145, 0.65)',
			},
		],
	},
	{
		heading: 'Deployment Services I use',
		items: [
			{
				title: 'Railway',
				icon: <SiRailway color='rgb(188, 65, 217)' />,
				color: 'rgba(188, 65, 217, 0.6)',
			},
			{
				title: 'Surge',
				icon: <FiUploadCloud color='rgb(200, 200, 200)' />,
				color: 'rgba(200, 200, 200, 0.6)',
			},
			{
				title: 'Vercel',
				icon: <SiVercel color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.6)',
			},
			{
				title: 'Render',
				icon: <SiRender color='rgb(70, 201, 58)' />,
				color: 'rgba(70, 201, 58, 0.6)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Tech'
					subTitle='STACK'
				/>
			</div>
		</section>
	);
};