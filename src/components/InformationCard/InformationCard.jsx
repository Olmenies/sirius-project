// Imports
import { Card } from 'react-bootstrap';
import {DynamicIconContainer} from '../';
import './style.css';

// Component start
const InformationCard = ({ icon, title, variable, extra }) => {
    
    return (
        <Card className='shadow mb-5 bg-white rounded'>
            <Card.Body>
                <div className='informationCardDiv'>
                    <div className='col-md-2'>
                        <DynamicIconContainer icon={icon}/>
                    </div>
                    <Card.Text className=' col-md-10 my-0 informationCardText'>
                        {title}:{variable}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
}

// Exports
export default InformationCard;
