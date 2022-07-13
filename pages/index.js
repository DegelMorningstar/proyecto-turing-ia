import Hero from '../components/Hero'
import { Layout } from '../components/Layout'
import Styles from '../styles/Styles.module.css'
import Carousel from '../components/Carousel'


const index = () => {
  return (
    <>
      <Hero />
      <Layout title='Home | Slalom'>
        <div className='container'>
          {/* What we do */}
          <div className={Styles.sectioncontent} id='what-we-do'>
            <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>What we do</h1>
            <p className={`${Styles.textcontent} ${Styles.animated} ${Styles.slideInRight}`}>Slalom is a global consulting firm that helps people and organizations dream bigger, move faster, and build better tomorrows for all.</p>
            <a className="btn btn-outline-primary me-3" href="#" role="button">Learn More</a>
            <a className="btn btn-outline-primary me-3" href="#our-work" role="button">Our Work</a>
          </div>
        </div>
        {/* Our Work */}
        <div className={Styles.sectioncontent} id='our-work'>
          <div className='container'>
            <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>Our work</h1>
            <Carousel />
            <div className='text-center'>
              <a href='#' className="btn btn-outline-primary">view all case studies</a>
            </div>
          </div>
          {/* technologys */}
          <div className={Styles.greysection}>
            <div className={Styles.techcontent}>
              <div className='row text-center'>
                <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>TECHNOLOGY PLATFORMS</h1>
                <div class="col-12 col-lg-10 text-center m-auto mt-4 mb-2">
                  <a href="/platforms/aws-cloud-consulting" title="AWS" target="">
                    <img alt="AWS logo grayscale" height="70" width="auto" src="https://www.slalom.com/sites/default/files/2019-12/platform-aws-up.svg" />
                  </a>
                  <a href="/platforms/google-cloud" title="Google Cloud" target="">
                    <img alt="Google Cloud logo" height="70" width="auto" src="https://www.slalom.com/sites/default/files/2019-12/platform-google-cloud-up.svg" />
                  </a>
                  <a href="/platforms/microsoft" title="Microsoft" target="">
                    <img alt="Microsoft logo" height="70" width="auto" src="https://www.slalom.com/sites/default/files/2019-12/platform-microsoft-up.svg" />
                  </a>
                  <a href="/platforms/salesforce-consulting" title="Salesforce" target="">
                    <img alt="Salesforce logo" height="70" width="auto" src="https://www.slalom.com/sites/default/files/2019-12/platform-salesforce-up.svg" />
                  </a>
                  <a href="/platforms/snowflake" title="Snowflake" target="">
                    <img alt="Snowflake logo" height="70" width="auto" src="https://www.slalom.com/sites/default/files/2020-12/platform-snowflake-140x70.svg" />
                  </a>
                  <a href="/platforms/tableau" title="Tableau" target="">
                    <img alt="Tableau logo" height="70" width="auto" src="https://www.slalom.com/sites/default/files/2019-12/platform-tableau-up.svg" />
                  </a>
                </div>
              </div>
                <p className='text-center'>We have strong partnerships with the world's top tech companies.</p>
                <div className='text-center'>
                  <a href='#' className="btn btn-outline-primary">view all</a>
                </div>
            </div>
          </div>
        </div>
        

        {/* who we are */}
        <div id='who-we-are'>
          <section className={Styles.whoWeAreContent}>
            <div className='container'>
                <div className='row'>
                  <div class="col-12 col-sm-6 offset-sm-3 col-xl-6 offset-xl-3">
                    <div className={Styles.whoWeAreImages1}>
                      <span className={Styles.whoWeAreImageSpan}>
                        <img src="https://www.slalom.com/sites/default/files/2020-06/homepage-working-circle-2-600x600.png" alt=".." />
                      </span>
                    </div>
                    <div className={Styles.whoWeAreImages2}>
                      <span className={Styles.whoWeAreImageSpan}>
                        <div className={Styles.imgWrapper}>
                          <img className='img-fluid' src="https://www.slalom.com/sites/default/files/2019-03/Three-images-with-content-landscape-840x1190.jpg" alt=".." />
                        </div>
                      </span>
                    </div>
                    <div className='header-who-we-are'>
                      <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>WHO WE ARE</h1>
                      <p className={Styles.subTitle}>We’re advisors, strategists, and engineers focused on people, above all else.</p>
                    </div>
                    <div className='content-who-we-are'>
                      <p className={Styles.aText}>Slalom teams are driven to do what's right and help you realize your vision. We believe in generating success collaboratively, leaving your organization stronger after every engagement, and building trust for the next big challenge.</p>
                      <a href='#' className="btn btn-outline-primary">Get to know us</a>
                    </div>
                    
                  </div>
                </div>
            </div>
          </section>
        </div>

        {/* what we're thinking */}
        <div className={Styles.greysection}>
          <div className='container'>
            <div className='row'>
              <div className='text-center'>
                <h1 className={`${Styles.title} ${Styles.animated} ${Styles.slideInLeft}`}>WHAT WE'RE THINKING</h1>
              </div>
              <div className='col-md-4 col-sm-12'>
                <ul>
                  <li>
                    <h2>News</h2>
                    <p>Slalom recognized as a 4x Microsoft partner award winner across US and Canada</p>
                  </li>
                </ul>
              </div>
              <div className='col-md-8 col-sm-12'>
                <div className='text-center'>
                  <p className={Styles.subTitle2}>Our latest company news, whitepapers, videos, and articles.</p>
                </div>
                
                <h1>Solutions</h1>
                <h1>Articles</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Let's talk */}
        <h1>Your future starts today. Ready?</h1>
        <button>Lets talk</button>

        {/* footer */}

      </Layout>
    </>
  )
}

export default index