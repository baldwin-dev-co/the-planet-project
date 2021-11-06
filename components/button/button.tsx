import React from 'react';
import styles from './button.module.css';

interface BtnProps {
	children: React.ReactChild;
	action?: React.MouseEventHandler<HTMLButtonElement> | string;
	secondary?: boolean;
	dark?: boolean;
}

const Btn: React.FC<BtnProps> = ({ children, secondary, dark, action }) => {
	if (typeof action === 'string') {
		return (
			<a
				href={action}
				className={`${styles.btn} ${secondary && styles.secondary} ${dark && styles.dark}`}>
				{children}
			</a>
		);
	}

	return (
		<button
			onClick={action}
			className={`${styles.btn} ${secondary && styles.secondary} ${dark && styles.dark}`}>
			{children}
		</button>
	);
};

export default Btn;
