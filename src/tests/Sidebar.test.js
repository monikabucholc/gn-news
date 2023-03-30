import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

test('clicking on sidebar button leads to correct link', () => {
  const mockShowMenu = jest.fn();
  const countriesList = [
    { code: 'au', name: 'Australia' },
    { code: 'br', name: 'Brazylia' },
  ];
  render(
    <BrowserRouter>
      <Sidebar showMenu={true} setShowMenu={mockShowMenu} countriesList={countriesList} />
    </BrowserRouter>
  );
  const sidebarButton = screen.getByText('Australia');
  fireEvent.click(sidebarButton);
  
  expect(window.location.pathname).toBe('/country/AU');
});