// Imports
import { ServicesCard } from '..';

// Component start
const ServicesCardContainer = ({ el }) => {

    return (
        <ServicesCard
            image={el.image}
            title={el.title}
            variable={el.variable}
            extra={el.extra}
        />
    );
}

// Exports
export default ServicesCardContainer;