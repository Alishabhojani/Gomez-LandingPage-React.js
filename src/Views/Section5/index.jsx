import '../../App.css';
import { FaStar } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';



function Section5() {

    return (<>

    <div className='sec5linediv'>
        <div className='line'><hr className='hr'></hr></div>
    <p className='sec5p'>Our Clients Come Back Again And Again.</p>
    

<div className='line'> <hr className='hr'></hr></div>
    </div>
    

        <div className='sec5maindiv'>

            <div className='sec5subdiv box1'>
                <div className=''>
                    <p className='mainhead'>Adrienne Truelove</p>
                    < FaStar className='star' />   <FaStar className='star'/>   <FaStar className='star' />   <FaStar className='star' />   <FaStar className='star' />
                    <p>An Exceptional Real State Firm</p>
                </div>
                <div>< FaGoogle className='socialmedia google' /></div>
            </div>

            <div className='sec5subdiv box2'>
                <div>
                    <p className='mainhead'>Quinn McColly</p>
                    < FaStar className='star' />   <FaStar className='star'/>   <FaStar className='star' />   <FaStar className='star' />   <FaStar className='star' />
                    <p>Gomez properties clearly provides its agents the resources they needs to deleiver a smooth transcation for their clients.</p>
                </div>
                <div><FaFacebookF  className='socialmedia' /></div>
            </div>

            <div className='sec5subdiv box1'>
                <div>
                    <p className='mainhead'>John Vickers</p>
                    < FaStar className='star' />   <FaStar className='star'/>   <FaStar className='star' />   <FaStar className='star' />   <FaStar className='star' />
                    <p>I highely recommendz Gomez properties.</p>
                </div>
                <div><FaFacebookF  className='socialmedia' /></div>
            </div>




        </div>
<button className='sec5btn'>Show More</button>

    </>);
};

export default Section5;