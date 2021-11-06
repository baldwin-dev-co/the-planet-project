import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Footer from '../../components/footer/footer';
import Nav from '../../components/nav/nav';

const Documentary: NextPage = () => {
	return (
		<>
			<Head>
				<title>Documentary</title>
			</Head>
			<Nav />
			<h1>Documentary</h1>
			<Footer />
		</>
	);
};

export default Documentary;
