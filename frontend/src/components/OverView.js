import React from 'react';
import PlaceCard from './cards/PlaceCard';
import { Container, Grid } from '@material-ui/core';
import TopBar from './commons/TopBar';
import Paper from '@material-ui/core/Paper';

export default function OverView({ places }) {
  return (
    <Paper>
      <Container component={'main'} disableGutters={false}>
        <Grid container spacing={2} direction={'row'} justify={'flex-start'}>
          <Grid item xs={12}>
            <TopBar />
          </Grid>
          {places?.map((placeData) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={placeData.id}>
              <PlaceCard placeData={placeData} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
}
