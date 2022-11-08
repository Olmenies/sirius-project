// Imports
import { Col } from 'react-bootstrap';
import { CustomCard } from '..';

// Component start
const CustomCardContainer = ({ el }) => {

    return (
        <div>
            <Col>
                <CustomCard
                    image={el.image}
                    title={el.title}
                    variable={el.variable}
                    extra={el.extra}
                />
            </Col>
        </div>
    );
}

// Exports
export default CustomCardContainer;