/**
 * @format
 */

import 'react-native';
import React from 'react';
import StationScreen from '../src/screens/StationScreen';
import renderer from 'react-test-renderer';

jest.mock('react-navigation', ({ withNavigation: (component) => component }));

describe("Search screen renders appropriately and function work", () => {
    it("renders correctly", () => {
        const searchScreen = renderer.create(<StationScreen />).toJSON();
        expect(searchScreen).toMatchSnapshot();
    });
});