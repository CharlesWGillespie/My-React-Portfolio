import AboutMe from '../components/AboutMe'
import Header from '../components/Intro'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

import '../css/aboutme.css'
export default function AboutMePage() {
return(
    <>
    <Navbar/>
    <Header />
    <AboutMe />
    <Footer/>
    </>
);
}