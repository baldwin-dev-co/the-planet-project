import React from 'react';
import styles from './doc-card.module.css';

interface DocCardProps {
	id: string;
	name: string;
}

const DocCard: React.FC<DocCardProps> = ({ name, id }) => {
	return (
		<a href={`/documentaries/${id}`} className={styles.wrapper}>
			<div className={styles.card}>
				<div className={styles.thumbnail_wrapper}>
					{/* <img src='https://picsum.photos/512/200' /> */}
				</div>
			</div>
			<div className={styles.name_tag}>
				<h3>{name}</h3>
			</div>
		</a>
	);
};

export default DocCard;
