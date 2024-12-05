import whychooseus from '../images/whychooseus.png'
import subtract from '../images/subtract.png'
import bgImage from '../images/aboutbg.png'

const About = () => {
    return (
        <>
            <div className="why-choose-us">
                <img src={bgImage} alt="background image" className='choose-us-background' />
                <div className="title-section">
                    <h2>Why People</h2>
                    <h1>Choose Us</h1>
                </div>

                <div className="image-section">
                    <img src={whychooseus} alt="Why Choose Us" />
                </div>

                <div className="content-section">
                    <div className="feature">
                        <span><img src={subtract} alt="Icon" /></span>
                        <div>
                            <h4>Lender approval is simple</h4>
                            <p>We’ve designed our process to be quick, easy, and efficient.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <span><img src={subtract} alt="Icon" /></span>
                        <div>
                            <h4>In-cash your credit quickly</h4>
                            <p>No origination fees or pre-payment. What you see is what you get.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <span><img src={subtract} alt="Icon" /></span>
                        <div>
                            <h4>Preserve your time</h4>
                            <p>Simple online form and access to live support 24/7.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <span><img src={subtract} alt="Icon" /></span>
                        <div>
                            <h4>No hidden charges</h4>
                            <p>Complete our online form. It's quick, easy, and confidential.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;