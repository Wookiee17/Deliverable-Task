import './Phone.css';

const Email = ({ number, type }) => (
    <div className="email">
        <p>{type}: {number}</p>
    </div>
);

export default Email;