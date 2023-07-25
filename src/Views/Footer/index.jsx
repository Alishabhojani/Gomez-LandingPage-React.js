import '../../App.css';
import blogo from '../../images/navlogoblack.svg';


function Footer() {

    return (<>
        <div className='border'>
            <div className='footermaindiv'>

                <div>
                    <img className='footerimg' src={blogo} alt="" />

                </div>
                <div>
                    <ul>
                        <li className='fclass'>Services</li>
                        <li>Browse for Sale</li>
                        <li>Browse Rentals</li>
                        <li>List Your Property</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className='fclass'>Company</li>
                        <li>Our Team</li>
                        <li>Career</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className='fclass'>Learn</li>
                        <li>Buyers Guide</li>
                        <li>Sellers Guide</li>
                        <li>Mortgage Calculator</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className='fclass'>LEGAL</li>
                        <li>IABS</li>
                        <li>Consumer Protection</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>


            </div>
        </div>

        <p className='plastfooter'>Gomez Properties © 2022</p>
    </>
    );
};
export default Footer;