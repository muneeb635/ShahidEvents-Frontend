import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
// @mui
import {
  Card,
  Table,
  Stack,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
} from '@mui/material';
import TableHead from '@mui/material/TableHead';
import { useGetAllTransactionsQuery } from '../redux/services/adminPanalAPI';
// components
import Scrollbar from '../components/scrollbar';

// ----------------------------------------------------------------------

export default function UserPage() {
  const [allTransactions, setAllTransactions] = useState([]);

  const { data: allTransactionsData } = useGetAllTransactionsQuery(null);

  useEffect(() => {
    if (allTransactionsData) {
      setAllTransactions(allTransactionsData?.data);
    }
  }, [allTransactionsData]);
  return (
    <>
      <Helmet>
        <title> Transactions | Talent Hub </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Transactions
          </Typography>
        </Stack>

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Transactions ID</TableCell>
                    <TableCell align="left">Amount</TableCell>
                    <TableCell align="left">Status</TableCell>
                    <TableCell align="left">Create Date</TableCell>
                    <TableCell align="left">Update Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allTransactions?.map((trans, ind) => (
                    <TableRow hover key={ind}>
                      <TableCell component="th" scope="row" padding="none">
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Typography variant="subtitle2" noWrap>
                            {trans?.id ?? 0}
                          </Typography>
                        </Stack>
                      </TableCell>

                      <TableCell align="left">{trans?.amount ?? '0'}</TableCell>

                      <TableCell align="left">{trans?.status ?? ''}</TableCell>

                      <TableCell size="large" align="left">
                        {trans?.created_at.slice(0, 10) ?? ''}
                      </TableCell>
                      <TableCell align="left">{trans?.updated_at.slice(0, 10) ?? ''}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </>
  );
}
