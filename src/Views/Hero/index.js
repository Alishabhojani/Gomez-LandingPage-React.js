import React, { useState } from 'react';
import '../../App.css';
//import
function Hero() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [robotChecked, setRobotChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission or validation logic here
        // You can access the form data using the state variables (name, email, address)
        console.log('Form submitted:', { name, email, address });
    };

    return (
        <>
            <div className='hero'>
                <div>
                    <h1 className='fhead'>Marketing Makes <span className='newhead'>The Difference</span> </h1>
                    <p className='plaintxt'>Gamez Properties is a full-service brokerage, serving Corpus Christi and the surrounding areas for the last 2 decades. Buy, sell & Rent with Gamez</p>
                    <div>
                        <a className='hero1a1'>Browse Homes</a>
                        <a className='hero1a2'>Find An Agent</a>
                    </div>
                </div>

                <div className='bbox'>
                    <div >
                        <h2 className='imptxt'>How Much Is Your Home Worth?</h2>
                        <p className='imptxt1'>Receive a personalized estimate via e-mail within the next 24 hours</p>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className='form' htmlFor="name">Full Name</label>
                                <br />
                                <input className='inpfield'
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className='form' htmlFor="email">Email</label>
                                <br />
                                <input className='inpfield'
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className='form' htmlFor="address">Address</label>
                                <br />
                                <input className='inpfield'
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <iframe className='robot' title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lcc4jgfAAAAAOos_X4DsbegiUxIM7pgi8dyFqyQ&amp;co=aHR0cHM6Ly9nb21lenByb3BlcnRpZXMudmVyY2VsLmFwcDo0NDM.&amp;hl=en&amp;type=image&amp;v=SglpK98hSCn2CroR0bKRSJl5&amp;theme=dark&amp;size=normal&amp;badge=bottomright&amp;cb=43x5ndeegzb5" width="304" height="78" role="presentation" name="a-gwgeofygo28z" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>

                            <button className='submit' type="submit">Get Your Home Value</button>
                        </form>


                    </div>


                </div>
            </div>
        </>
    );
}

export default Hero;
