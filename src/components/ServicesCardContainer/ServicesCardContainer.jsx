// Imports
import { ServicesCard } from '..';

// Component start
const ServicesCardContainer = ({el}) => {
    return (
        <ServicesCard
            icon={el.icon}
            title={el.title}
            variable={el.variable}
            extra={el.extra}
            type={el.type}
        />
    );
}

// Exports
export default ServicesCardContainer;