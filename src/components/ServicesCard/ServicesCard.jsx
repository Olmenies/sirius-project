// Imports
import { Card } from 'react-bootstrap';

// Component start
const CustomCard = ({ image, title, variable, extra }) => {

    return (
        <Card>
            <Card.Body>
                <div className='customCardDiv'>
                    {image}
                    <Card.Text className='my-0'>
                        {title}: {variable}
                    </Card.Text>
                    {extra.map((el, i) => {
                        return (
                            {
                                ...el,
                                key: i
                            }
                        );
                    })}
                </div>
            </Card.Body>
        </Card>
    );
}

// Exports
export default CustomCard;
