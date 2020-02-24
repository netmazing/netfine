import React from "react";
import Layout from '../components/layout';
import LoaderCustomers from '../components/LoaderCustomers';

import '../scss/internal-loader.scss';

const CustomersPage = () => (
  <Layout>
      <LoaderCustomers/>
    <div>ok</div>
  </Layout>
  
)

export default CustomersPage
