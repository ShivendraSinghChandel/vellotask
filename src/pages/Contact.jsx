import { Link } from "react-router-dom";
import logo from '../images/logo.png'
const Loan=()=>{
    return(
        <>
        <div className="contact-container">
        <div className="contact-logo">
          <img src={logo} alt="Company Logo" />
          <p>We help complete your financial desire in just a few steps.</p>
        </div>

        <div className="contact-section">
          <h3>Company</h3>
          <a to="#">Who we are</a>
          <a to="#">Blog</a>
          <a to="#">Rates & Fees</a>
          <a to="#">Credit Score</a>
          <a to="#">Credit Repair</a>
          <a to="#">E-consent</a>
        </div>

        <div className="contact-section">
          <h3>Important</h3>
          <a to="#">How to work</a>
          <a to="#">About us</a>
          <a to="#">Unsubscribe</a>
          <a to="#">Update Preferences</a>
          <a to="#">Advertiser Disclosure</a>
          <a to="#">CCPA</a>
        </div>

        <div className="contact-section">
          <h3>Products</h3>
          <a to="#">Payday Loans</a>
          <a to="#">Installment Loans</a>
          <a to="#">Personal Loans</a>
        </div>
      </div>
        </>
    )
}

export default Loan;