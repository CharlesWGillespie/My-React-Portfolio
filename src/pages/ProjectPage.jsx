import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

import '../css/projects.css'

export default function ProjectPage() {
    return(
        <>
        <Navbar/> 
        <h1 className='projects-h1'>My projects</h1>
        <div className='project-container'>
            <img className='project-img' src="/assets/rooms-3226fb27d847.herokuapp.com_login(Nexus 5X).png" alt="An image of our rooms app login page on a Nexus 5x" />
            <div className='project-a-container'>
                <a className="project-a-tag" href="https://rooms-3226fb27d847.herokuapp.com/login">Live App</a>
                <a className="project-a-tag" href="https://github.com/samanthashleyrose/rooms">Github Repo</a>
            </div>
            <h2 className='project-title'>Rooms</h2>
            <div className='app-description-container'>
                <p className='app-description'>Rooms is a collaborative messaging platform inspired by popular apps like Discord and Slack. It offers users a centralized space to connect with others and engage in conversations ranging from work discussions to casual chatting with friends. With Rooms, you can easily log in, create or join a room using unique codes, and manage all your active rooms conveniently through the hamburger menu. Additionally, we've included a user-friendly profile page where you can manage your login information. Powered by Node, Express, and SQL technologies, Rooms is designed to provide a seamless chatting experience. Join us and start chatting today! </p>
            </div>
            <img className='project-img' src="/assets/NFL(Nexus 5X).png" alt="An image of my NFL news and player roster app on a Nexus 5X" />
            <div className='project-a-container'>
                <a className="project-a-tag" href="https://charleswgillespie.github.io/95-96-Bulls-NFL-Stats-and-GeoLocator/">Live App</a>
                <a className="project-a-tag" href="https://github.com/CharlesWGillespie/95-96-Bulls-NFL-Stats-and-GeoLocator">Github Repo</a>
            </div>
            <h2 className='project-title'>NFL App</h2>
            <div className='app-description-container'>
                <p className='app-description'>Introducing our NFL fan app, your ultimate companion for staying updated on all things football. With our app, you can easily view upcoming games, catch up on the latest league news, and dive deep into your favorite teams' rosters. Leveraging ESPN's API, we bring you real-time data and insights to enhance your NFL experience. Whether you're a die-hard fan or a casual observer, our app provides a seamless interface to explore game schedules, stay informed with league updates, and get to know your favorite teams inside out. Experience the excitement of the NFL like never before with our app designed specifically for passionate football enthusiasts.</p>
            </div>
            <img className='project-img' src="/assets/WorkScheduler(Nexus 5X).png" alt="An image of my Work Time Scheduler app on a Nexus 5X" />
            <div className='project-a-container'>
                <a className="project-a-tag" href="https://charleswgillespie.github.io/work-time-scheduler/">Live App</a>
                <a className="project-a-tag" href="https://github.com/CharlesWGillespie/work-time-scheduler">Github Repo</a>
            </div>
            <h2 className='project-title'>Work-Time Scheduler</h2>
            <div className='app-description-container'>
                <p className='app-description'>Introducing Work-Time Scheduler, your personal assistant for efficient task management. With Work-Time Scheduler, you can easily organize your workday by typing in tasks along with their corresponding times. Say goodbye to scattered notes and confusion about your schedule. My app provides a simple and intuitive interface for inputting your tasks and setting their allotted times, helping you stay on track and manage your time effectively. </p>
            </div>
            <img className='project-img' src="/assets/weather-viewer_(Nexus 5X).png" alt="An image of my Work Time Scheduler app on a Nexus 5X" />
            <div className='project-a-container'>
                <a className="project-a-tag" href="https://charleswgillespie.github.io/weather-viewer/">Live App</a>
                <a className="project-a-tag" href="https://github.com/CharlesWGillespie/weather-viewer?tab=readme-ov-file">Github Repo</a>
            </div>
            <h2 className='project-title'>Weather Viewer</h2>
            <div className='app-description-container'>
                <p className='app-description'>Introducing Weather Viewer, your go-to app for quick and accurate weather updates. With Weather Viewer, you can easily search for any city and instantly access the latest weather forecast for the day. </p>
            </div>
            <h2 className='project-title'>More Coming Soon!</h2>
        </div>
        <Footer/>
        </>
    );
}