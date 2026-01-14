import { render, screen } from '@testing-library/react';
import { Practices } from './Practices';

describe('ProfileCard', () => {
    test('renders profile card with name', () => {
        render(<Practices />);
        expect(screen.getByText('Preeti')).toBeInTheDocument();
        expect(screen.getByText('Rishant')).toBeInTheDocument();
    });

    test('renders age correctly', () => {
        render(<Practices />);
        expect(screen.getByText('Age: 18')).toBeInTheDocument();
        expect(screen.getByText('Age: 21')).toBeInTheDocument();
    });

    test('renders greeting message', () => {
        render(<Practices />);
        expect(screen.getByText('Hello Preeti, welcome aboard!')).toBeInTheDocument();
        expect(screen.getByText('Hello Rishant, keep up the great work!')).toBeInTheDocument();
    });

    test('renders children content', () => {
        render(<Practices />);
        expect(screen.getByText('Hobbies: Reading, Painting')).toBeInTheDocument();
        expect(screen.getByText('Hobbies: Gaming, Cooking')).toBeInTheDocument();
    });

    test('renders contact button', () => {
        render(<Practices />);
        const buttons = screen.getAllByText('Contact');
        expect(buttons).toHaveLength(2);
    });

    test('profile card has correct CSS class', () => {
        render(<Practices />);
        const profileCards = document.querySelectorAll('.profile-card');
        expect(profileCards).toHaveLength(2);
    });
});