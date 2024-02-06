import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faLinkedin,
	faMedium,
	faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from '@chakra-ui/react';
import ProjectsSection from './ProjectsSection';
import LandingSection from './ContactMeSection';

const socials = [
	{
		icon: faEnvelope,
		url: 'mailto: hello@example.com',
	},
	{
		icon: faGithub,
		url: 'https://github.com',
	},
	{
		icon: faLinkedin,
		url: 'https://www.linkedin.com',
	},
	{
		icon: faMedium,
		url: 'https://medium.com',
	},
	{
		icon: faStackOverflow,
		url: 'https://stackoverflow.com',
	},
];

const handleClick = () => {
	alert('hello amali');
};

const Header = () => {
	const handleClick = anchor => () => {
		const id = `${anchor}-section`;
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	return (
		<Box
			position="fixed"
			top={0}
			left={0}
			right={0}
			translateY={0}
			transitionProperty="transform"
			transitionDuration=".3s"
			transitionTimingFunction="ease-in-out"
			backgroundColor="#18181b"
		>
			<Box color="white" maxWidth="1280px" margin="0 auto">
				<HStack
					px={16}
					py={4}
					justifyContent="space-between"
					alignItems="center"
				>
					<nav>
						<HStack spacing={8}>
							<Box w="40px" h="40px" {...socials}>
								<a href="hello@example.com">
									<FontAwesomeIcon icon={faEnvelope} size="2x" />
								</a>
							</Box>
							<Box w="40px" h="40px" {...socials}>
								<a href="https://github.com">
									<FontAwesomeIcon icon={faGithub} size="2x" />
								</a>
							</Box>
							<Box w="40px" h="40px" {...socials}>
								<a href="https://www.linkedin.com">
									<FontAwesomeIcon icon={faLinkedin} size="2x" />
								</a>
							</Box>
							<Box w="40px" h="40px" {...socials}>
								<a href="https://medium.com">
									<FontAwesomeIcon icon={faMedium} size="2x" />
								</a>
							</Box>
							<Box w="40px" h="40px" {...socials}>
								<a href="https://stackoverflow.com">
									<FontAwesomeIcon icon={faStackOverflow} size="2x" />
								</a>
							</Box>
						</HStack>
					</nav>
					<nav>
						<HStack spacing={8}>
							<Box>
								<a
									href="ProjectsSection.js"
									onClick={handleClick()}
									id="projects-section"
									{...LandingSection}
								>
									Projects
								</a>
							</Box>
							<Box>
								<a
									href="ContactMeSection.js"
									onClick={handleClick()}
									id="contactme-section"
									{...ProjectsSection}
								>
									Contact Me
								</a>
							</Box>
						</HStack>
					</nav>
				</HStack>
			</Box>
		</Box>
	);
};
export default Header;
