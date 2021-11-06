import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Cta } from '../../components/cta/cta';
import Footer from '../../components/footer/footer';
import Nav from '../../components/nav/nav';
import PageHeader from '../../components/page-header';

const Documentaries: NextPage = () => {
	return (
		<>
			<Head>
				<title>Documentaries</title>
			</Head>
			<Nav />
			<PageHeader title='Documentaries' />
			<Cta />
			<Footer />
		</>
	);
};

export default Documentaries;
