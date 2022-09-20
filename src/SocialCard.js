import './SocialCard.css';
import Location from './Location';
import Phone from './Phone';
import Email from './Email';

const SocialCard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__title">{userData.name} </div>
            <div className="card__body">
                
                <Email number={userData.email} type="Email"/>
                <Phone number={userData.phone} type="Cell"/>
                <div className="card__image"><img src="https://p.kindpng.com/picc/s/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png"/></div>
            </div>

        </div>
    )
};

export default SocialCard;