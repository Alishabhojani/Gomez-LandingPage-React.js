import '../../App.css';
import { FaGift } from 'react-icons/fa';
import {FaSortAmountDownAlt } from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';
import {FaGraduationCap } from 'react-icons/fa';

function Section3() {

    return (<>
    <div className='flexboxessmain'>

<div className='flexboxes'>
    <div className='icon'><FaGift className='iconsize'/></div>
<div className='upperbox'>
    <p className='mainheading'>Exceptional Service </p>
    <p className='boxtxt'>We take care of you like family. Our team of agents and staff are always available for you throughout the entire process.</p>
</div>
</div>


<div className='flexboxes'>
    <div className='icon'> <FaSortAmountDownAlt className='iconsize'/></div>
<div className='upperbox'>
    <p className='mainheading'>Skilled Negotiations</p>
    <p className='boxtxt'>Whether representing you as a buying or selling agent, we get you the best number, relative to the market and your situation.</p>
</div>
</div>
    

<div className='flexboxes'>
    <div className='icon'> <FaRegEnvelope className='iconsize' /> </div>
<div className='upperbox'>
    <p className='mainheading'>Clear Communication</p>
    <p className='boxtxt'>We pride ourselves as being great communicators. You are never left in the dark, or left on read.</p>
</div>
</div>

<div className='flexboxes'>
    <div className='icon'><FaGraduationCap className='iconsize'/></div>
<div className='upperbox'>
    <p className='mainheading'>Willingness To Teach</p>
    <p className='boxtxt'>The real estate process can have a lot of moving parts, and can be intimidating. We give you the info to make sound real estate decisions.</p>
</div>
</div>
</div>
    
    
    </>);
};

export default Section3;