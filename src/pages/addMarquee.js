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
    <Grid container bgcolor={'#d5d9e0'} borderRadius={5} sx={{ height: '77vh' }}>
      <Typography variant="h3" p={5}>
        Add Marquee
      </Typography>
      <Grid container justifyContent={'center'}>
        <form onSubmit={formik.handleSubmit}>
          <Card variant="outlined" sx={{ m: 5, boxShadow: 50 }}>
            <CardContent>
              <Grid container gap={3} p={3}>
                <TextField
                  id="MarqueeName"
                  label="Marquee Name"
                  variant="outlined"
                  type="text"
                  placeholder="Enter Marquee Name"
                  name="MarqueeName"
                  value={formik.values.MarqueeName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.MarqueeName && Boolean(formik.errors.MarqueeName)}
                  helperText={formik.touched.MarqueeName && formik.errors.MarqueeName}
                />
                <TextField
                  id="Persantage"
                  label="Marquee Persantage"
                  variant="outlined"
                  type="number"
                  placeholder="Enter Marquee Persantage"
                  name="Persantage"
                  value={formik.values.Persantage}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.Persantage && Boolean(formik.errors.Persantage)}
                  helperText={formik.touched.Persantage && formik.errors.Persantage}
                />
              </Grid>
              <Grid container gap={3} p={3}>
                <Grid width={'47%'}>
                  <FormControl fullWidth>
                    <InputLabel>Anar price</InputLabel>
                    <Select
                      id="AnarFixedBy"
                      label="Anar price"
                      variant="outlined"
                      type="text"
                      placeholder="Enter Anar Price"
                      name="AnarFixedBy"
                      value={formik.values.AnarFixedBy}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.AnarFixedBy && Boolean(formik.errors.AnarFixedBy)}
                      helperText={formik.touched.AnarFixedBy && formik.errors.AnarFixedBy}
                    >
                      <MenuItem value={'marquee'}>Marquee Fixed</MenuItem>
                      <MenuItem value={'decore'}>Decore Fixed</MenuItem>
                      <MenuItem value={'decore'}>Not Fixed</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <TextField
                  id="AnarFixedPrice"
                  label="Anar Fixed Price"
                  variant="outlined"
                  type="number"
                  placeholder="Select Anar Price"
                  name="AnarFixedPrice"
                  value={formik.values.AnarFixedPrice}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.AnarFixedPrice && Boolean(formik.errors.AnarFixedPrice)}
                  helperText={formik.touched.AnarFixedPrice && formik.errors.AnarFixedPrice}
                />
              </Grid>
              <Grid container gap={3} p={3}>
                <Grid width={'50%'}>
                  <FormControl fullWidth>
                    <InputLabel>Dj Owner</InputLabel>
                    <Select
                      id="DjOwner"
                      label="Anar price"
                      variant="outlined"
                      type="text"
                      placeholder="Select Dj Owner"
                      name="DjOwner"
                      value={formik.values.DjOwner}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.DjOwner && Boolean(formik.errors.DjOwner)}
                      helperText={formik.touched.DjOwner && formik.errors.DjOwner}
                    >
                      <MenuItem value={'marquee'}>Marquee</MenuItem>
                      <MenuItem value={'decore'}>Decore</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', paddingBottom: 5 }}>
              <Button variant="contained" type="submit">
                Add Marquee
              </Button>
            </CardActions>
          </Card>
        </form>
      </Grid>
    </Grid>
  );
}
