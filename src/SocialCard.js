import './SocialCard.css';
import Location from './Location';
import Phone from './Phone';
import Email from './Email';

import Details from './Details';

const SocialCard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__title">{userData.name} </div>
            <div className="card__body">
            <div className="card__image"><img src="https://p.kindpng.com/picc/s/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png"/></div>
                <Email number={userData.email} type="Email"/>
                <Phone number={userData.phone} type="Cell"/>
               
                <Details userData={userData}/>
            </div>

        </div>
    )
};

export default SocialCard;