import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Descripción de la prueba
describe('App Component', () => {
    test('renders the LocationList component', () => {
        // Renderizar el componente
        render(<App />);

        // Verificar que el spinner inicial está presente (porque `LocationList` muestra un spinner inicialmente)
        const spinner = screen.getByRole('progressbar');
        expect(spinner).toBeInTheDocument();
    });
});
