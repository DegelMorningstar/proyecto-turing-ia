import $ from 'jquery'
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//import 'owl.carousel';
import dynamic from 'next/dynamic';
import Card from './Card';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

const options = {
    loop:true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    dots: false,
    autoplayTimeout: 3000,
    autoplaySpeed: 4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin:30
        },
        400: {
            items: 1,
            margin:30
        },
        600: {
            items: 1,
            margin:20
        },
        700: {
            items: 1,
            margin:20
        },
        1000: {
            items: 3,
        }
    },
  };
const Carousel = ({ children }) => {
    return (
        <>
            <div className="CarouselContent ">
                <div className="container owl-2-style">
                    <OwlCarousel {...options} >
                        {children}
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}

export default Carousel