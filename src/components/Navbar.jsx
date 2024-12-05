import { useState } from "react";
import logo from '../images/logo.png'
import hero from '../images/hero-1.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loanAmount, setLoanAmount] = useState(100);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const progressBarWidth = ((loanAmount - 100) / (350000 - 100)) * 100;

    return (
        <>
            <section className="home">
                <nav className="navbar">
                    <div className="container">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>

                        <div className={`nav-links ${isOpen ? "open" : ""}`}>
                            <a href="#" onClick={toggleMenu}>
                                Home
                            </a>
                            <a  href="#" onClick={toggleMenu}>
                                Loans
                            </a>
                            <a  href="#" onClick={toggleMenu}>
                                About us
                            </a>
                            <a  href="#" onClick={toggleMenu}>
                                Blog
                            </a>
                            <a  href="#" onClick={toggleMenu}>
                                Contact
                            </a>
                        </div>

                        <button className="menu-toggle" onClick={toggleMenu}>
                            <svg
                                className="menu-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>

                    {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
                </nav>


                <div className="hero">
                    <div className="hero-content">
                        <div className="hero-img">
                            <img src={hero} alt="hero img" />
                        </div>
                        <div className="form">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" /> <br /><br />
                            <input type="email" placeholder="Email" />
                            <div className="loan-form">
                                <div className="loan-amount">
                                    <div className="loan-label">
                                        <div>
                                            Loan amount ($100-$35000) 
                                        </div>
                                        <div>${loanAmount}</div>
                                    </div>

                                    <input
                                        type="range"
                                        id="loanAmount"
                                        min="100"
                                        max="350000"
                                        step="10"
                                        value={loanAmount}
                                        onChange={(e)=>{setLoanAmount(e.target.value)}}
                                    />
                                </div>

                                 <div className="progress-container">
                                    <div
                                        className="progress-bar"
                                        style={{ width: `${progressBarWidth}%` }}
                                    >${loanAmount}</div>
                                </div>
                            </div> 
                            <div>
                                <label className="checkbox-container">
                                    <input
                                        type="checkbox"
                                    />
                                    I agree to the terms and conditions
                                </label>
                            </div>
                            <button type="submit">Get Started</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Navbar;
