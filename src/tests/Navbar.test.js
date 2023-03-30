import { screen, render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar/Navbar'
import { useTranslation } from 'react-i18next';

jest.mock('react-i18next');
    beforeEach(() => {
        let i18n = {
            language: 'en',
            changeLanguage: jest.fn(),
        };
        useTranslation.mockReturnValue({ t: (key) => key, i18n });
    });

test('Navbar displays proper viewMode using Redux', () => {
    render(
        <Provider store={store}>
             <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        </Provider>
    );
    const viewMode = store.getState().viewMode.mode;
    const viewModeIcon = screen.getByAltText('Type of view mode icon');
    expect(viewModeIcon.src.substring(viewModeIcon.src.lastIndexOf('/')+1)).toContain(viewMode === 'list' ? 'grid_view_FILL0_wght400_GRAD0_opsz48.svg' : 'view_agenda_FILL0_wght400_GRAD0_opsz48.svg');
});