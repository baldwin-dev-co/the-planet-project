import React, { useState } from 'react';
import styles from './about-card.module.css';

interface AboutCardProps {
	name: string;
	bio: string;
	imageUrl: string;
	imageAlt?: string;
}

enum CardSide {
	front,
	back,
}

const AboutCard: React.FC<AboutCardProps> = ({ name, bio, imageUrl, imageAlt }) => {
	const [cardSide, setCardSide] = useState(CardSide.front);

	const flip = () => {
		if (cardSide == CardSide.front) {
			setCardSide(CardSide.back);
		} else {
			setCardSide(CardSide.front);
		}
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.card} onClick={flip}>
				{cardSide == CardSide.front ? (
					<img className={styles.image} src={imageUrl} alt={imageAlt} />
				) : (
					<p>{bio}</p>
				)}
			</div>
			<h3>{name}</h3>
		</div>
	);
};

export default AboutCard;
