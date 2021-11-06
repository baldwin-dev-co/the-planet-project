import Head from 'next/head';
import React from 'react';
import Btn from '../components/button/button';
import Carousel from '../components/carousel/carousel';
import { Cta } from '../components/cta/cta';
import DocCard from '../components/doc-card/doc-card';
import Footer from '../components/footer/footer';
import Link from '../components/link/link';
import Nav from '../components/nav/nav';
import styles from '../styles/index.module.css';

const Home = () => {
	return (
		<>
			<Head>
				<title>The Planet Project</title>
			</Head>
			<Nav />
			<section className={styles.hero}>
				<div className={styles.hero_container}>
					<Carousel>
						<img src='/assets/images/hero-1.jpg' alt='' />
						<img src='/assets/images/hero-2.jpg' alt='' />
						<img src='/assets/images/hero-3.jpg' alt='' />
						<img src='/assets/images/hero-4.jpg' alt='' />
					</Carousel>

					<div className={styles.hero_content}>
						<h1>
							Stories About <wbr /> Humanity.
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae velit praesentium
							impedit dolores sit hic magni fuga dolor nemo, ducimus iure animi aliquam est.
						</p>
						<div>
							<Btn>Support</Btn>
							<Btn secondary>Contact</Btn>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.docs_section}>
				<img src='/assets/images/bg-pattern-1.png' className={styles.bg_pattern_1} />
				<div className='container'>
					<h2>Documentaries</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolore quia,
						distinctio reiciendis aliquid expedita, omnis odit similique eum explicabo labore
						sequi tempora quo.
					</p>
					<div className={styles.docs_layout}>
						<DocCard id='orjwojvn' name='Caucasia' />
						<DocCard id='jrvjovnaaiw' name='Guatemala' />
						<DocCard id='310j24wnoue' name='Italy' />
					</div>
					<Link href='/documentaries'>See All</Link>
				</div>
			</section>
			<Cta />
			<Footer />
		</>
	);
};

export default Home;
