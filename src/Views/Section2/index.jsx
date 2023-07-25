import '../../App.css';
import box from '../../images/pic5.jpeg';
import { FaArrowRight } from 'react-icons/fa';


function Section2() {

return (<>

<div className='section1maindiv sec2box '>
<div className='sec2main'>
<p className='sec2p1'>Hard Working Agents</p>
<h1 className='sec2p2'>Real Estate Is <span className='spctxt'> Simple</span> With A Gomez Properties Real Estate Professional</h1>
<p className='sec2p3'>We have been helping Coastal Bend Families Buy and Sell Real Estate for over 15 years. We would love to serve you too.</p>

<h4 className='sec2p4'>Connect With Us</h4>
<p className='sec2p5'>We have Residential, Commercial, and Rental specialists ready to walk you through the process, no matter your needs.</p>
<h3 className='sec2p5'>Find An Agent <FaArrowRight/> </h3>
</div>

<div>
<img className='msgbox'  src={box} alt="" />
</div>

</div>





</>);

};

export default Section2;