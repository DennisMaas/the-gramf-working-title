import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import PlaceTypeIcon from './PlaceTypeIcon';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  media: {
    height: '27vh',
  },
  mapicon: {},
});

export default function PlaceCard({ placeData }) {
  const classes = useStyles();
  const history = useHistory();
  const { latitude, longitude } = placeData;
  const gMapUrl =
    'https://www.google.com/maps/@?api=1&map_action=map&center=' +
    latitude +
    ',' +
    longitude +
    '&zoom=' +
    '20';

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label={placeData.type} className={classes.avatar}>
            <PlaceTypeIcon type={placeData.type} />
          </Avatar>
        }
        action={
          <IconButton href={gMapUrl} aria-label="maps">
            <MapOutlinedIcon />
          </IconButton>
        }
        title={placeData.title}
        subheader={placeData.street}
      />
      <CardActionArea onClick={() => history.push(`/places/${placeData.id}`)}>
        <CardMedia
          className={classes.media}
          component={'img'}
          image={placeData.primaryPictureUrl}
          title={placeData.title}
        />
      </CardActionArea>
    </Card>
  );
}
