import React from "react";
import Layout from '../components/layout';
import LoaderContact from '../components/LoaderContact';

import '../scss/internal-loader.scss';

const ContactPage = () => (
  <Layout>
      <LoaderContact/>
    <div>ok</div>
  </Layout>
  
)

export default ContactPage
