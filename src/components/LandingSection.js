import React from 'react';
import { Avatar, Heading, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import { AnimatePresence } from 'framer-motion';
import amir from '../images/amire.jpg';
const greeting = 'Hello, I am Amali !';
const bio1 = 'A frontend developer';
const bio2 = 'specialised in React';

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
	<FullScreenSection
		justifyContent="center"
		alignItems="center"
		isDarkBackground
		backgroundColor="#2A4365"
	>
		<Avatar src={amir} />
		<VStack>
			<Heading size="md">{greeting}</Heading>
			<Heading size="lg">{bio1}</Heading>
			<Heading size="xl">{bio2}</Heading>
		</VStack>
	</FullScreenSection>
);

export default LandingSection;
