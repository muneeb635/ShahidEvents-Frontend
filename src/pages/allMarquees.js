import { useState } from 'react';
// @mui
import {
  Card,
  Grid,
  Typography,
  CardContent,
  CardActions,
  Button,
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useGetAllUserQuery, useUserStatusMutation } from '../redux/services/adminPanalAPI';

export default function UserPage() {
  const [djby, setDjby] = useState('');
  const handleChangeDj = (event) => {
    setDjby(event.target.value);
  };
  const validationSchema = yup.object({
    MarqueeName: yup.string('Enter Marquee Name').required('Name is required').min(5, 'Enter Valid length'),
    Persantage: yup
      .number('Enter Persantage')
      .min(10, 'Enter Valid Persantage')
      .max(90, 'Enter Valid Persantage')
      .required('Persantage is required'),
    AnarFixedPrice: yup
      .number('Enter Amounr')
      .min(100, 'Enter Valid Amounr')
      .max(2000, 'Enter Valid Amounr')
      .required('price is required'),
    AnarFixedBy: yup.string('Select One Option').required('Select One Option'),
    DjOwner: yup.string('Select One Option').required('Select One Option'),
  });
  const formik = useFormik({
    initialValues: {
      MarqueeName: '',
      Persantage: '',
      AnarFixedBy: '',
      AnarFixedPrice: '',
      DjOwner: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('object', formik.values);
    },
  });
  return (
    <Grid container>
      <Typography variant="h3" p={5}>
        All Marquees
      </Typography>
      <Grid container justifyContent={'center'}>
        {''}
      </Grid>
    </Grid>
  );
}
