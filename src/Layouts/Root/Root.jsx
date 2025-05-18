// import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet} from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
  //    const navigation = useNavigation();

  // if (navigation.state === "loading") {
  //   return <Loading />;
  // }

    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;