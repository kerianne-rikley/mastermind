import React from 'react';
import TestRenderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';

import HomeScreen from '../HomeScreen';

describe('<HomeScreen />', () => {

    const mockNavigation = {
        navigate: jest.fn()
    }

    it('renders correctly', () => {
        const tree = TestRenderer.create(<HomeScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('start button', () => {
        let startButton;

        beforeAll(() => {
            const { getByTestId } = render(<HomeScreen navigation={mockNavigation} />);
            startButton = getByTestId('start-button');
        });

        it('exists', () => {
            expect(startButton).toBeDefined();
        });

        it('navigates to game when clicked', () => {
            fireEvent.press(startButton);
            expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
            expect(mockNavigation.navigate).toHaveBeenCalledWith('Game');
        });
    });
});
