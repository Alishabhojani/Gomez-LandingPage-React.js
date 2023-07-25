import '../../App.css';
import pic1 from '../../images/image1.jpeg';
import pic2 from '../../images/image2.jpeg';
import pic3 from '../../images/image3.jpeg';
import pic4 from '../../images/image4.jpeg';
import pic5 from '../../images/image5.jpeg';
import pic6 from '../../images/image6.jpeg';
import pic7 from '../../images/image7.jpeg';
import pic8 from '../../images/image8.jpeg';
import { FaArrowRight } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { FaHammer } from 'react-icons/fa';

function Section1() {
var listings = [
    {
img: pic1,
title: "7029 Clubgate Dr.",
price:"$209,000",
address:"Corpus Christi, TX 78416",
bed:"3 Bed",
bath:"2 Bath",
sqft:"1,350 Sqft",
    },
    {
        img: pic2,
        title: "2618 Fleece Dr.",
        price:"$330,000",
        address:"Corpus Christi, TX 78414",
        bed:"4 Bed",
        bath:"2 Bath",
        sqft:"2,246 Sqft",
            },
            {
                img: pic3,
                title: "16022 Cuttysark St.",
                price:"$600,000",
                address:"Corpus Christi, TX 78418",
                bed:"3 Bed",
                bath:"2 Bath",
                sqft:"2,120 Sqft",
                    },
                 
                            {
                                img: pic4,
                                title: "12922 Glenyork Ct.",
                                price:"$410,000",
                                address:"Houston, TX 77429",
                                bed:"5 Bed",
                                bath:"3 Bath",
                                sqft:"3,031 Sqft",
                                    },
                        ]
                            var listings1 = [
                                {
                            img: pic5,
                            title: "4221 Archdale Dr.",
                            price:"$165,900",
                            address:"Corpus Christi, TX 78416",
                            bed:"3 Bed",
                            bath:"2 Bath",
                            sqft:"1,098 Sqft",
                                },
                                {
                                    img: pic6,
                                    title: "3709 Piedra Creek Dr.",
                                    price:"$192,500",
                                    address:"Corpus Christi, TX 78410",
                                    bed:"3 Bed",
                                    bath:"2 Bath",
                                    sqft:"1,112 Sqft",
                                        },
                                        {
                                            img: pic7,
                                            title: "1117 Shephard Dr.",
                                            price:"$169,900",
                                            address:"Corpus Christi, TX 78412",
                                            bed:"3 Bed",
                                            bath:"1 Bath",
                                            sqft:"$169,900",
                                                },
                                                {
                                                    img: pic8,
                                                    title: "3626 Curtiss St.",
                                                    price:"$189,900",
                                                    address:"Corpus Christi, TX 78405",
                                                    bed:"4 Bed",
                                                    bath:"4 Bath",
                                                    sqft:"2,355 Sqft",
                                                        }
                                    
                            
                            
                            ]

    return (<>
        <div className='section1maindiv'>
            <div className='featured listing'>
                <h2>
                    Featured Listings
                </h2>
            </div>
            <div className='listings'>
{listings.map((value, index)=>{
    return <>
     <div className='individuallist'>

<div >
    <img className='imagemain' src={value.img} alt="" />
</div>
<div className='listdescription'>
    <div className='description1'>
        <h3 className='sent1'>{value.title}</h3>
        <h2 className='sent2'>{value.price}</h2>

    </div>
    <div className='description2'>
        <p className='sent3'>{value.address}</p>
    </div>
    <div className='description3'>

        <div className='bath'> <FaBed /> {value.bed}</div>
        <div className='bath' > <FaBath />{value.bath} </div>
        <div className='bath'> <FaHammer />{value.sqft} </div>

    </div>

</div>
</div>

    </>
})}
            </div>
        </div>

        <div className='section1maindiv'>
            <div>
                <h2>
                Corpus Christi, Under 200k
                </h2>
            </div>
            <div className='listings'>
{listings1.map((value, index)=>{
    return <>
     <div className='individuallist'>

<div >
    <img className='imagemain' src={value.img} alt="" />
</div>
<div className='listdescription'>
    <div className='description1'>
        <h3 className='sent1'>{value.title}</h3>
        <h2 className='sent2'>{value.price}</h2>

    </div>
    <div className='description2'>
        <p className='sent3'>{value.address}</p>
    </div>
    <div className='description3'>

        <div className='bath'> <FaBed /> {value.bed}</div>
        <div className='bath' > <FaBath />{value.bath} </div>
        <div className='bath'> <FaHammer />{value.sqft} </div>

    </div>

</div>
</div>

    </>
})}
            </div>
        </div>

        <h2 className='section1maindiv'>Browse all listings <FaArrowRight/></h2>
    </>

    );

};


export default Section1;
