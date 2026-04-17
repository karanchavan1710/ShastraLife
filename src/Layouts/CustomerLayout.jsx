import React from 'react';
import Header from '../Customer/Components/Common/Header/Header';
import Footer from '../Customer/Components/Common/Footer/Footer';
import FloatingCartButton from '../Customer/Components/FloatingCartButton/FloatingCartButton';
import { Toaster } from 'react-hot-toast';


const CustomerLayout = ({ children }) => {
   
    return (
      <>
          <>
            <Header />
            <Toaster />
            <FloatingCartButton />
            <main>{children}</main>
            <Footer />
          </>
      </>
    );
};

export default CustomerLayout;
