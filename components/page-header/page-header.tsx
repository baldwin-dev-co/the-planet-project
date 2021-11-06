import React from 'react';
import styles from './page-header.module.css';

interface PageHeaderProps {
	title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
	return (
		<section>
			<div className={styles.container}>
				<div className={styles.bg}>
					<h1 className={styles.title}>{title}</h1>
				</div>
			</div>
		</section>
	);
};

export default PageHeader;
