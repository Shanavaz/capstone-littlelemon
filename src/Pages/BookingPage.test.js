import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingPage from './BookingPage';

describe('BookingPage Component', () => {
    it('renders without crashing', () => {
        render(<BookingPage />);
    });

    it('displays the table header', () => {
        render(<BookingPage />);
        expect(screen.getByText(/Number Of Guests/i)).toBeInTheDocument();
        expect(screen.getByText(/Occasion/i)).toBeInTheDocument();
    });
});
