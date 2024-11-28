import React from 'react';
import { render, screen, act } from '@testing-library/react';
import LocationList from './LocationList';
import api from '../api';

// Mock de la API
jest.mock('../api', () => ({
    get: jest.fn(),
}));

// Mock de las locaciones
const mockLocations = [
    {
        id: 1,
        code: 'LOC1',
        name: 'Location 1',
        image: 'http://example.com/image1.jpg',
        creation_date: '2024-01-01',
    },
    {
        id: 2,
        code: 'LOC2',
        name: 'Location 2',
        image: null,
        creation_date: '2024-02-01',
    },
];

describe('LocationList Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders loading spinner initially', async () => {
        // Mockear la API para simular una respuesta lenta o datos vacíos
        const mockApiPromise = new Promise((resolve) => {
            setTimeout(() => resolve({ data: { data: [] } }), 100);
        });
        (api.get as jest.Mock).mockReturnValueOnce(mockApiPromise);

        // Renderizar el componente
        render(<LocationList />);

        // Verificar que el spinner está presente al inicio
        expect(screen.getByRole('progressbar')).toBeInTheDocument();

        // Esperar a que la promesa del mock se resuelva y el componente actualice el estado
        await act(async () => {
            await mockApiPromise;
        });

        // Verificar que el spinner desaparece
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });


    test('renders locations correctly after API call', async () => {
        (api.get as jest.Mock).mockResolvedValueOnce({ data: { data: mockLocations } });

        await act(async () => {
            render(<LocationList />);
        });

        // Verifica que las locaciones aparecen en el DOM
        expect(await screen.findByText('Location 1')).toBeInTheDocument();
        expect(screen.getByText('Location 2')).toBeInTheDocument();

        // Verifica las imágenes
        const images = screen.getAllByRole('img');
        expect(images[0]).toHaveAttribute('src', 'http://example.com/image1.jpg');
        expect(images[1]).toHaveAttribute('src', '/placeholder.png');
    });

    test('renders empty state when no locations are found', async () => {
        // Simular API devolviendo datos vacíos
        (api.get as jest.Mock).mockResolvedValueOnce({ data: { data: [] } });

        // Renderizar el componente
        render(<LocationList />);

        // Esperar a que el estado del componente se actualice
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0));
        });

        // Verificar que el contenedor `Grid` existe utilizando su clase de Material-UI
        const gridContainer = document.querySelector('.MuiGrid-root');
        expect(gridContainer).toBeInTheDocument();

        // Verificar que el contenedor está vacío
        expect(gridContainer?.childElementCount).toBe(0);
    });

});
