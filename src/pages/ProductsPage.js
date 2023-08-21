import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
// @mui
import { Container, Stack, Typography, Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// components
import { ProductList } from '../sections/@dashboard/products';
// mock
import { useGetAllCatagoriesQuery, useGetVideoByCatagouryQuery } from '../redux/services/adminPanalAPI';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [catagories, setCatagories] = useState([]);
  const { data: catagourtData } = useGetAllCatagoriesQuery(null);
  const [videoId, setVideoId] = useState(0);
  const [videoCatagoury, setVideoCatagoury] = useState([]);
  const { data: videoByCatagoury, refetch } = useGetVideoByCatagouryQuery(videoId);
  useEffect(() => {
    refetch();
  }, [videoId]);
  useEffect(() => {
    if (catagourtData) {
      setCatagories(catagourtData);
    }
  }, [catagourtData]);
  useEffect(() => {
    if (videoByCatagoury) {
      setVideoCatagoury(videoByCatagoury?.result?.video);
    }
  }, [videoByCatagoury]);
  console.log('object', videoCatagoury);
  return (
    <>
      <Helmet>
        <title>Video | Talent Hub </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>
        <Stack direction={'row'} spacing={2}>
          {catagories?.map((catagories, ind) => (
            <Button
              key={ind}
              variant="contained"
              onClick={(e) => {
                setVideoId(catagories?.id ?? 1);
              }}
            >
              {catagories?.category_name}
            </Button>
          ))}
        </Stack>
        <Stack spacing={5}>
          {videoCatagoury?.map((video, ind) => (
            <Card key={ind} sx={{ maxWidth: 345, boxShadow: 100 }}>
              <CardActionArea>
                <CardMedia component="iframe" src={video?.video_url} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Container>
    </>
  );
}
