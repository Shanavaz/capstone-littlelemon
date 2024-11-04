import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegistrationDetails from './RegistrationDetails';

// Mock data for testing
const formData =
    { date: "04/11/2024", time: "17:00", noofguest: "4", occasion: "Birthday" };

describe('RegistrationDetails Component', () => {
    it('renders without crashing', () => {
        render(<RegistrationDetails formData={formData} />);
    });

    it('displays the table header', () => {
        render(<RegistrationDetails formData={formData} />);
        expect(screen.getByText(/No Of Guests/i)).toBeInTheDocument();
        expect(screen.getByText(/Occasion/i)).toBeInTheDocument();
    });

    it('displays correct data in table cells', () => {
        render(<RegistrationDetails formData={formData} />);
        expect(screen.getByText(formData.date)).toBeInTheDocument();
        expect(screen.getByText(formData.time)).toBeInTheDocument();
    });
});
