// Imports
import { Card } from 'react-bootstrap';
import './style.css';

// Component start
const InformationCard = ({ image, title, variable, extra }) => {

    return (
        <Card className='shadow p-3 mb-5 bg-white rounded'>
            <Card.Body>
                <div className='informationCardDiv'>
                    {image}
                    <Card.Text className='my-0 informationCardText'>
                        <p>{title}:</p>
                        <p>{variable}</p>
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
}

// Exports
export default InformationCard;
