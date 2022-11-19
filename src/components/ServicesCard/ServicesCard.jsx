// Imports
import { createElement } from 'react';
import { Card } from 'react-bootstrap';
import {DynamicIconContainer} from '../';

// Component start
const ServicesCard = ({ image, title, variable, extra }) => {

    return (
        <Card className='shadow p-3 mb-5 bg-white rounded'>
            <Card.Body>
                <div className='customCardDiv'>
                    <DynamicIconContainer image={image}/>
                    <Card.Text className='my-0'>
                        {title}: {variable}
                    </Card.Text>
                    {
                        extra.map((el, i) => {
                            return(
                                <p key={i}>{el}</p>
                            )
                        })
                    }
                </div>
            </Card.Body>
        </Card>
    );
}

// Exports
export default ServicesCard;
