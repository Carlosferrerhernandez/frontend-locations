import React, { useEffect, useState } from 'react';
import api from '../api';
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CircularProgress,
    TextField,
} from '@mui/material';

// Definición de la interfaz de una locación
interface Location {
    code: string;
    name: string;
    image: string | null; // Permitir que la imagen pueda ser null
    creation_date: string;
}

const LocationList: React.FC = () => {
    const [locations, setLocations] = useState<Location[]>([]);
    const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [search, setSearch] = useState<string>(''); // Estado para el campo de búsqueda

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await api.get('/locations');
                setLocations(response.data.data);
                setFilteredLocations(response.data.data); // Inicializar el filtro
            } catch (error) {
                console.error('Error fetching locations:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLocations();
    }, []);

    // Manejar cambios en el campo de búsqueda
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        setSearch(value);

        const filtered = locations.filter((location) =>
            location.name.toLowerCase().includes(value) ||
            location.code.toLowerCase().includes(value)
        );
        setFilteredLocations(filtered);
    };

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <div style={{ padding: '20px' }}>
            {/* Campo de búsqueda */}
            <TextField
                label="Buscar locación"
                variant="outlined"
                fullWidth
                value={search}
                onChange={handleSearch}
                style={{ marginBottom: '20px' }}
            />

            {/* Lista de locaciones */}
            <Grid container spacing={3}>
                {filteredLocations.map((location) => (
                    <Grid item xs={12} sm={6} md={4} key={location.code}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={location.image || '/placeholder.png'}
                                alt={location.name}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/placeholder.png'; // Imagen genérica si falla
                                }}
                            />
                            <CardContent>
                                <Typography variant="h5">{location.name}</Typography>
                                <Typography variant="body2">Code: {location.code}</Typography>
                                <Typography variant="body2">
                                    Created on: {new Date(location.creation_date).toLocaleDateString()}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default LocationList;
