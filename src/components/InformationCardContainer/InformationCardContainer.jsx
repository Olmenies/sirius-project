// Imports
import { InformationCard } from '..';

// Component start
const InformationCardContainer = ({ el }) => {

    return (
        <InformationCard
            icon={el.icon}
            title={el.title}
            variable={el.variable}
        />
    );
}

// Exports
export default InformationCardContainer;