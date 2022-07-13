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

const Carousel = () => {
    return (
        <>
            <div class="CarouselContent ">
                    <div class="container owl-2-style">
                        <OwlCarousel
                            loop
                            margin={10}
                            nav={false}
                            autoplay={true}
                            dots={false}
                            autoplayTimeout={3000}
                            autoplaySpeed={4000}
                            autoplayHoverPause={true}
                        >
                            <Card 
                                title='Persist Nashville'
                                text='Helping more students earn college degrees'
                                imageUrl='https://www.slalom.com/sites/default/files/2022-04/Persist-Nashville_Portrait_605x560.jpg'/>
                            <Card
                                title='Fairstone Financial'
                                text='Moving deeper into the cloud'
                                imageUrl='https://www.slalom.com/sites/default/files/2022-04/Fairstone_Portrait_605x560.jpg'
                            />
                            <Card
                                title='Carter`s'
                                text='The power off connected planning'
                                imageUrl='https://www.slalom.com/sites/default/files/2022-02/Carters-portrait-landscape-605x560.jpg'
                            />
                            <Card
                                title='Clean up Australia'
                                text='Data to protect the planet'
                                imageUrl='https://www.slalom.com/sites/default/files/2022-02/Clean-up-australia-thumbnail-Portrait-605x560.jpg'
                            />
                            <Card
                                title='Pacific Life'
                                text='Accelerating analytics with Snowflake'
                                imageUrl='https://www.slalom.com/sites/default/files/2021-06/pacific-life-thumbnail-portrait-605x560.jpg'
                            />
                            <Card
                                title='LA country DPSS'
                                text='A modern helpline to serve the public'
                                imageUrl='https://www.slalom.com/sites/default/files/2022-04/LA-County-DPSS_SEO_605x560.jpg'
                            />
                            <Card
                                title='Feeding America'
                                text='Connecting food banks, ending hunger'
                                imageUrl='https://www.slalom.com/sites/default/files/2022-03/feeding-america-thumb-3-605x560.jpg'
                            />
                            <Card
                                title='LogRhythm'
                                text='Streamling the process that power cybersecurity'
                                imageUrl='https://www.slalom.com/sites/default/files/2022-02/log-thumbnail-landscape-605x340.jpg'
                            />
                            <Card
                                title='CDL RSC'
                                text='Supporting rapid antigen screening across Canada'
                                imageUrl='https://www.slalom.com/sites/default/files/2022-02/CDL-thumbnail-portrait-605x560.jpg'
                            />
                            <Card
                                title='Carhartt'
                                text='The human side of large-scale transformation'
                                imageUrl='https://www.slalom.com/sites/default/files/2021-01/Carhartt-SEO-vertical.jpg'
                            />
                            <Card
                                title='United Nations'
                                text='Allocating humanitarian funds to those who need them most'
                                imageUrl='https://www.slalom.com/sites/default/files/2022-02/UN-case-study-thumbnail-Portrait-605x560.jpg'
                            />
                            <Card
                                title='City of Chicago'
                                text='Data visualizations in the fight against COVID-19'
                                imageUrl='https://www.slalom.com/sites/default/files/2021-06/CoC-data-SEO.jpg'
                            />
                            <Card
                                title='IG Wealth'
                                text='Empowering advisors to build stronger financial futures'
                                imageUrl='https://www.slalom.com/sites/default/files/2022-02/IG-Wealth-thumbnail-Portrait-605x560.jpg'
                            />
                            <Card
                                title='American Cancer Society'
                                text='Finding breast cancer patterns with machine learning'
                                imageUrl='https://www.slalom.com/sites/default/files/2022-02/ACS-thumbnail-portrait-605x560.jpg'
                            />
                            <Card
                                title='DSW'
                                text='Reimagining customer loyalty in Google Cloud'
                                imageUrl='https://www.slalom.com/sites/default/files/2019-04/DSW-SEO-500x500.jpg'
                            />
                            <Card
                                title='Alaska Airlines'
                                text='Delivering the "gold standard" of airline mergers'
                                imageUrl='https://www.slalom.com/sites/default/files/2019-03/alaska-plane-small-portrait-thumbnail-1210x1120.jpg'
                            />
                            
                        </OwlCarousel>

                    </div>

            </div>
        </>
    )
}

export default Carousel