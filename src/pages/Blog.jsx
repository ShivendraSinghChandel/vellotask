import bgImage from '../images/blogbg.png'
import topbgImage from '../images/loanbg.png'

const Blog=()=>{
    return(
        <>
        <div className="blog-container">
          <img src={bgImage} alt="blog-background" className='blog-background' />
          <img src={topbgImage} alt="blog-background" className='blog-top-background' />
        <h2 className="blog-subtitle">Explore your</h2>
        <h1 className="blog-title">Financial Desire</h1>
        <h2 className="blog-subtitle">With Us</h2>
        <h3 className="blog-highlight">Unlock your personal loan today</h3>
        <p className="blog-description">
          You register online from your home computer or any mobile device. Because the process occurs in real-time, it’s very fast. We’ve been connecting consumers with lenders for over 15 years; helping people of most credit situations locate the suitable loans for their needs. As a result, we have developed a reputation with both lenders and consumers as providing a reputable, trustworthy service, we build unique relationships with a network of dependable loan providers in the loan industry while building much of our business via referrals from applicants. Check out your Loan option by completing the online form in Few Steps
        </p>
        <button>Get started</button>
      </div>
        </>
    )
}

export default Blog;