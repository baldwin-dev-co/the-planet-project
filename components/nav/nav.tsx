import React from 'react';
import styles from './nav.module.css';

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
	return (
		<nav className={styles.nav}>
			<div className={`container ${styles.container}`}>
				<a href='/' className={`${styles.logo} elevated`}>
					<img
						src='/assets/logos/icon-black.svg'
						alt='The Planet Project logo'
						width='18px'
						height=''
					/>
				</a>

				<div />

				<div className={`${styles.bar} elevated`}>
					<a href='/' className={styles.link}>
						Home
					</a>
					<a href='/about' className={styles.link}>
						About
					</a>
					<a href='/documentaries' className={styles.link}>
						Documentaries
					</a>
					<a href='/contact' className={styles.link}>
						Contact
					</a>
				</div>

				<a href='/support' className={`${styles.cta} elevated`}>
					<div className={styles.link}>Support</div>
				</a>
			</div>
		</nav>
	);
};

export default Nav;
