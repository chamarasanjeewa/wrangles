import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import SlideShow from '../components/SlideShow';

var settings = {
  images: [
    { url: require('../assets/images/1.jpg'), position: 'center center' },
    { url: require('../assets/images/2.jpg'), position: 'center center' },
    { url: require('../assets/images/3.jpg'), position: 'center center' },
    { url: require('../assets/images/4.jpg'), position: 'center center' },
    { url: require('../assets/images/5.jpg'), position: 'center center' },
    { url: require('../assets/images/6.jpg'), position: 'center center' },
    { url: require('../assets/images/7.jpg'), position: 'center center' },
    { url: require('../assets/images/8.jpg'), position: 'center center' },
    { url: require('../assets/images/9.jpg'), position: 'center center' },
    { url: require('../assets/images/10.jpg'), position: 'center center' },
    { url: require('../assets/images/11.jpg'), position: 'center center' },
    { url: require('../assets/images/12.jpg'), position: 'center center' },
    { url: require('../assets/images/13.jpg'), position: 'center center' },
    { url: require('../assets/images/14.jpg'), position: 'center center' },
    { url: require('../assets/images/15.jpg'), position: 'center center' },
    { url: require('../assets/images/16.jpg'), position: 'center center' },
    { url: require('../assets/images/17.jpg'), position: 'center center' },
    { url: require('../assets/images/18.jpg'), position: 'center center' },
    { url: require('../assets/images/19.jpg'), position: 'center center' },
    { url: require('../assets/images/20.jpg'), position: 'center center' },
    { url: require('../assets/images/21.jpg'), position: 'center center' },
  ],
  // Delay.
  delay: 3000,
};

const IndexPage = () => (
  <Layout>
    <Header />
    <EmailForm />
    <Footer />
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;
