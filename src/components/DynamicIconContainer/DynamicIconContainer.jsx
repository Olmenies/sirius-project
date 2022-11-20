// Imports
import { DynamicIcon } from '../';
import { createElement } from 'react';
import * as ReactIcons from 'react-icons/ai'; // Reduce this

// Component start
const DynamicIconContainer = ({icon}) => {
    const Icon = createElement(ReactIcons[icon.title], { size: 50 });
    return (
        <DynamicIcon icon={Icon} />
    );
}

// Exports
export default DynamicIconContainer;