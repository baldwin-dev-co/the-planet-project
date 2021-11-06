import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={`container ${styles.container}`}>
				<img src='assets/logos/logo-white.svg' alt='The Planet Project logo' width='360px' />
				<address>
					<FooterLink label='Email' href='mailto:hello@example.com' />
					<FooterLink label='Instagram' href='https://instagram.com/theplanetproj' />
					<FooterLink label='Youtube' href='https://youtube.com/c/ThePlanetProject' />
				</address>
			</div>
		</footer>
	);
};

interface FooterLinkProps {
	label: string;
	href: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, href }) => {
	return (
		<a href={href} className={styles.link} target='_blank' rel='noopener noreferrer'>
			{label}
		</a>
	);
};

export default Footer;
