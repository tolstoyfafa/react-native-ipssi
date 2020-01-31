import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ListScreen from '../screens/ListScreen';
import MapScreen from '../screens/MapScreen';
import StationScreen from '../screens/StationScreen';

const ListStack = createStackNavigator(
    {
        Home: ListScreen,
        Station: StationScreen
    }
);

ListStack.navigationOptions = {
    tabBarLabel: 'List',
};

const MapStack = createStackNavigator(
    {
        Links: MapScreen,
    }
);

MapStack.navigationOptions = {
    tabBarLabel: 'Map',
};

export default createBottomTabNavigator({
    ListStack,
    MapStack,
});