import Subscription from '../Subscription/subs'
import './payment.css'
import { courseDetailsList } from '../../data'

const Payment = () => (
    <div className="payment-container">
        <div className="pay-container">
            <div className="course-details-container">
                <h1 className="access-heading">
                    Access curated courses worth <span className= "currency "style={{fontFamily: "Roboto"}}>₹ <span style={{textDecoration: "line-through solid #FF0000"}}>18,500</span></span> at just <span className='money' style={{fontFamily: "Roboto", color: "#0096FF"}}>₹ 99</span> per year!
                </h1>
                <ul className="details">
                    {courseDetailsList.map(item => (
                        <li key={item.id} className="detail-list">
                            <img src={item.icon} alt={`icon${item.id}`} className="icon" />
                            <p className="detail-text" dangerouslySetInnerHTML={{__html: `${item.detail}`}}></p>
                        </li>
                    ))}
                </ul>
            </div>
            <Subscription/>
        </div>
    </div>
)

export default Payment