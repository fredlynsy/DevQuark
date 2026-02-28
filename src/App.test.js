// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DevQuark title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DevQuark/i);
    expect(titleElement).toBeInTheDocument();
});
