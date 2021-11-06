import React from 'react';
import Btn from '../button/button';
import styles from './cta.module.css';

interface CtaProps {}

export const Cta: React.FC<CtaProps> = ({}) => {
	return (
		<section className={styles.cta}>
			<div className={`container ${styles.container}`}>
				<div className={styles.content}>
					<h2>Like what we're doing?</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor laborum doloribus
						blanditiis mollitia officia voluptas illo.
					</p>
					<div>
						<Btn action='/support' dark>
							Support
						</Btn>
						<Btn action='/contact' dark secondary>
							Contact
						</Btn>
					</div>
				</div>
			</div>
		</section>
	);
};
