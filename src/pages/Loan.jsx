import form1 from '../images/form1.png'
import form2 from '../images/form2.png'
import form3 from '../images/form3.png'
import form4 from '../images/form4.png'
import bgImage from '../images/loanbg.png'

const Loan=()=>{
    return(
        <>
        <div className='loan-container'> 
        <img src={bgImage} alt="some image" className='bgImage' />
            <div className='loan-text'>
                <h1>How does it works?</h1>
                <h4>Your Guide to Getting a Loan</h4>
                <p>Welcome to Website name, where securing the financial assistance you need is simpler than ever. Whether you're looking to fund a new project, consolidate debt, or cover unexpected expenses, our streamlined process ensures quick and hassle-free access to the funds you require. Here's how it works:</p>
                <button>Get started</button>
            </div>
            <div className='loan-image'>
                <div><img src={form1} alt="" /></div>
                <div><img src={form2} alt="" /></div>
                <div><img src={form3} alt="" /></div>
                <div><img src={form4} alt="" /></div>
            </div>
        </div>
        </>
    )
}

export default Loan;
