import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
// @mui
import { Container, Stack, Typography, Button } from '@mui/material';
// components
import { ProductList } from '../sections/@dashboard/products';
// mock
import { useGetAllCatagoriesQuery } from '../redux/services/adminPanalAPI';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [catagories, setCatagories] = useState([]);
  const { data, error } = useGetAllCatagoriesQuery(null);
  useEffect(() => {
    if (data) {
      setCatagories(data);
    }
  }, [data]);
  return (
    <>
      <Helmet>
        <title>Video | Talent Hub </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>
        <Stack sx={12} direction={'row'} spacing={2}>
          {catagories?.map((catagories, ind) => (
            <Button key={ind} variant="contained">
              {catagories?.category_name}{' '}
            </Button>
          ))}
        </Stack>
        {/* <ProductList products={catagories} /> */}
      </Container>
    </>
  );
}
