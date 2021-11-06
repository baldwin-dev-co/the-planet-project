import Head from 'next/head';
import React from 'react';
import Footer from '../components/footer/footer';
import Nav from '../components/nav/nav';
import PageHeader from '../components/page-header';

const Home = () => {
	return (
		<>
			<Head>
				<title>Title</title>
			</Head>
			<Nav />
			<PageHeader title='Support' />
			<Footer />
		</>
	);
};

export default Home;
