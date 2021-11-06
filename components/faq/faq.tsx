import React, { useState } from 'react';
import styles from './faq.module.css';

interface FaqProps {
	question: string;
	answer: string;
}

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className={styles.faq} onClick={() => setOpen(!open)}>
			<div className={styles.question_wrapper}>
				<img
					src='/assets/icons/expand.svg'
					alt='expand icon'
					className={styles.icon}
					style={{
						transform: open ? 'rotateX(180deg)' : 'none',
					}}
				/>
				<h3 className={styles.question}>{question}</h3>
			</div>
			<div
				className={styles.answer_wrapper}
				style={{
					height: open ? 'auto' : 0,
				}}>
				<p className={styles.answer}>{answer}</p>
			</div>
		</div>
	);
};

export default Faq;
