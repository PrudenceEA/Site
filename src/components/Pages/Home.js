import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

//Re-usable components
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';
import Team from '../common/Team';
import Timeline from '../common/Timeline';
import Clients from '../common/Clients';
import Footer from '../common/Footer';

class Home extends Component {

    render(){
        return(
            <div>
                <Header
                    title="Welcome to Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    button='Tell me more'
                    link="/services"
                    showButton = {true}
                    image={image}
                 />
                 <Services />
                 <Portfolio />
                 <Timeline />
                 <Team />
                 <Clients />
                 <Footer />
            </div>
        )
    }

}

export default Home;