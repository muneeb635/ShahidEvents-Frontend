import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
// @mui
import { Card, Stack, Container, Typography, TextField, Button } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import { useGetAllTransactionsQuery } from '../redux/services/adminPanalAPI';
// components
import Scrollbar from '../components/scrollbar';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Notification | Talent Hub </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Notification
          </Typography>
        </Stack>

        <Card>
          <Stack spacing={4} p={5}>
            <Stack width={500} sx={{ alignSelf: 'center' }}>
              <TextField label="Enter Notification To Sent " multiline variant="outlined" />
            </Stack>
            <Stack sx={{ alignSelf: 'center' }}>
              <Button sx={{ width: '150px' }} variant="contained">
                Sent Notification
              </Button>
            </Stack>
          </Stack>
        </Card>
      </Container>
    </>
  );
}
