// Imports
import { InformationCard } from '..';

// Component start
const InformationCardContainer = ({ el }) => {

    return (
        <InformationCard
            image={el.image}
            title={el.title}
            variable={el.variable}
            extra={el.extra}
        />
    );
}

// Exports
export default InformationCardContainer;