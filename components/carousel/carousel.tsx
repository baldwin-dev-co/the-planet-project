import React, { useState } from 'react';
import styles from './carousel.module.css';

interface CarouselProps {
	children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
	const [slide, setSlide] = useState(0);
	const stepForward = () => {
		if (slide == children?.length - 1) {
			setSlide(0);
		} else {
			setSlide(slide + 1);
		}
	};

	return (
		<div className={styles.carousel}>
			<div className={styles.slide}>{children[slide]}</div>
			<button className={`${styles.nav_button} elevated`} onClick={stepForward} />
			<div className={styles.navigation}>
				{children.map((_, i) => (
					<div
						className={`${styles.nav_indicator} ${i == slide && styles.active}`}
						onClick={() => setSlide(i)}
						key={i}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
