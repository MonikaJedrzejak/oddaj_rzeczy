import React from 'react';
import decorator from '../assets/Decoration.svg';
import signature from '../assets/Signature.svg';
import photo from '../assets/People.jpg';

export default function HomeAboutUs() {
    return (
        <div className="AboutUs-container HomeAboutUs">
        <div className="AboutUs-left">
            <h5 className="AboutUs-title">O nas</h5>
            <img src={decorator} alt="decoration" className="decoration"/>
            <p className="AboutUs-text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            <img src={signature} alt="signature" className="AboutUs-signature"/>
        </div>
        <div className="AboutUs-right">
        <img src={photo} alt="our team" className="AboutUs-image"/>
        </div>
        </div>
    )
}
