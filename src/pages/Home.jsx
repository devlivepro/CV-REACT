import React from "react";
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div>
            <Header />
            <Nav />


            <main>
                <h1>Je suis Home</h1>
            </main>

            <Footer />
        </div>
    )
}

export default Home;