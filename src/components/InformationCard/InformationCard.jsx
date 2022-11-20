// Imports
import { Card } from 'react-bootstrap';
import {DynamicIconContainer} from '../';
import './style.css';

// Component start
const InformationCard = ({ icon, title, variable, extra }) => {
    
    return (
        <Card className='shadow p-3 mb-5 bg-white rounded'>
            <Card.Body>
                <div className='informationCardDiv'>
                    <DynamicIconContainer icon={icon}/>
                    <Card.Text className='my-0 informationCardText'>
                        {title}:{variable}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
}

// Exports
export default InformationCard;
