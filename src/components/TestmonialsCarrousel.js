import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Avatar1 from '../assets/images/avatars/avatar-1.png';
import Avatar2 from '../assets/images/avatars/avatar-2.png';
import Avatar3 from '../assets/images/avatars/avatar-3.png';
import Avatar4 from '../assets/images/avatars/avatar-4.png';
function TestmonialsCarrousel() {
    return (
        <>
             <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
             >
                <div>
                    <img src={Avatar1} />
                    <div className="myCarrousel">
                        <h3 >John Doe 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={Avatar2} />
                    <div className="myCarrousel">
                        <h3 >Jane Doe 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={Avatar3} />
                    <div className="myCarrousel">    
                        <h3>John Doe  3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={Avatar4} />
                    <div className="myCarrousel">        
                        <h3 >John Doe 4</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default TestmonialsCarrousel;