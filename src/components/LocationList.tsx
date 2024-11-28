import React, { useEffect, useState } from 'react';
import api from '../api';
import { Grid, Card, CardContent, CardMedia, Typography, CircularProgress } from '@mui/material';

interface Location {
    code: string;
    name: string;
    image: string;
    creation_date: string;
}

const LocationList: React.FC = () => {
    const [locations, setLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await api.get('/locations');
                setLocations(response.data.data);
            } catch (error) {
                console.error('Error fetching locations:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLocations();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Grid container spacing={3} style={{ padding: '20px' }}>
            {locations.map((location) => (
                <Grid item xs={12} sm={6} md={4} key={location.code}>
                    <Card>
                        <CardMedia component="img" height="140" image={location.image} alt={location.name} />
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
    );
};

export default LocationList;
