// Imports
import { DynamicIcon } from '../';
import { createElement } from 'react';
import * as ReactIcons from 'react-icons/ai'; // Reduce this

// Component start
const DynamicIconContainer = ({image}) => {
    const Icon = createElement(ReactIcons[image.title], { size: 50 });

    return (
        <DynamicIcon image={Icon} />
    );
}

// Exports
export default DynamicIconContainer;