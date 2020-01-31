import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainNavigatorTab from './MainNavigatorTab';

export default createAppContainer(
    createSwitchNavigator({
        // You could add another route here for authentication.
        // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        Main: MainNavigatorTab,
    })
);
