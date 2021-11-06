import Head from 'next/head';
import React from 'react';
import { Cta } from '../components/cta/cta';
import Faq from '../components/faq/faq';
import Footer from '../components/footer/footer';
import Nav from '../components/nav/nav';
import PageHeader from '../components/page-header/page-header';
import styles from '../styles/about.module.css';

const Home = () => {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<Nav />
			<PageHeader title='About' />
			{/* <section>
				<div className={`container ${styles.card_layout}`}>
					<AboutCard
						name='TJ Huizar'
						bio='lorem ipsum doler sit amet consectetur'
						imageUrl='/assets/images/tj.jpg'
					/>
				</div>
			</section> */}
			<section>
				<div className='container'>
					<h2>** Title Here **</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti quis
						dolore in laudantium incidunt, tempora quia id, dignissimos ipsa totam. Quod,
						facilis. Cum magnam autem maxime sapiente, iste officia.
					</p>
				</div>
			</section>

			<section>
				<div className='container'>
					<h2>FAQ's</h2>
					<div className={styles.faq_layout}>
						<Faq
							question='Question one?'
							answer='lorem ipsum doler sit amet consctetur adiasping elit sed diam'
						/>
						<Faq
							question='Question two?'
							answer='lorem ipsum doler sit amet consctetur adiasping elit sed diam'
						/>
						<Faq
							question='Question Three, This ones a long one?'
							answer='lorem ipsum doler sit amet consctetur adiasping elit sed diam'
						/>
						<Faq
							question='Question 4?'
							answer='lorem ipsum doler sit amet consctetur adiasping elit sed diam'
						/>
					</div>
				</div>
			</section>

			<Cta />
			<Footer />
		</>
	);
};

export default Home;
