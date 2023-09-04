import { useState } from 'react';
// @mui
import {
  Card,
  Grid,
  Typography,
  CardContent,
  Button,
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
  Container,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useGetAllUserQuery, useUserStatusMutation } from '../redux/services/adminPanalAPI';

const steps = ['select Marquee', 'Customer Info', 'Event Info'];
export default function UserPage() {
  const validationSchema = yup.object({
    SrNo: yup.number('Enter Srno').required('Sr Number  is required'),
    CustomerNumber: yup
      .number('Enter phno')
      .required('Sr Number  is required')
      .min(11, 'entervalid number')
      .max(11, 'entervalid number'),
    CustomerName: yup
      .string('Enter Customer Name')
      .min(3, 'Enter Valid Name')
      .max(20, 'Enter Valid Name')
      .required('Name is required'),
    EventType: yup.string('Enter Event Type').required('Event Type is required'),
    EventTime: yup.string('Enter Event time').required('Time is required'),
    EventDate: yup.date('Enter Date').required('Date is required'),
  });
  const formik = useFormik({
    initialValues: {
      SrNo: '',
      CustomerName: '',
      CustomerNumber: '',
      EventType: '',
      EventTime: '',
      EventDate: '',
      StagePrice: '',
      DjPrice: '',
      FallowPrice: '',
      FLowerPrice: '',
      SnowPrice: '',
      EntryPrice: '',
      TrustPrice: '',
      AnarPrice: '',
      AnarQuantity: '',
      ChoktaPrice: '',
      Extraoption1: '',
      Extraoption2: '',
      Extraoption3: '',
      MarqueeRavenue: '',
      decoreOwnerRavenue: '',
      decorePatnerRavenue: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('object', formik.values);
    },
  });

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Grid direction={'column'} bgcolor={'#d5d9e0'} borderRadius={5} sx={{ height: '77vh' }}>
      <Typography variant="h3" p={5}>
        Add Event
      </Typography>
      <Container>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Grid container justifyContent={'center'} paddingBottom={10}>
          <form onSubmit={formik.handleSubmit}>
            <Card variant="outlined" sx={{ boxShadow: 90, marginTop: 5 }}>
              <CardContent>
                <Grid container>
                  {activeStep === 0 && (
                    <>
                      <Typography variant="h6">Select Marquee</Typography>
                      <TextField label="Phone" name="phone" onChange={handleChange} fullWidth margin="normal" />
                    </>
                  )}
                  {activeStep === 1 && (
                    <Grid direction={'row'} gap={3}>
                      <Grid container gap={3}>
                        <TextField
                          id="SrNo"
                          label="Vouchar Number"
                          variant="outlined"
                          type="number"
                          placeholder="Sr No"
                          name="SrNo"
                          value={formik.values.SrNo}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.SrNo && Boolean(formik.errors.SrNo)}
                          helperText={formik.touched.SrNo && formik.errors.SrNo}
                        />
                        <TextField
                          id="CustomerName"
                          label="Customer Name"
                          variant="outlined"
                          type="text"
                          placeholder="Customer Name"
                          name="CustomerName"
                          value={formik.values.CustomerName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.CustomerName && Boolean(formik.errors.CustomerName)}
                          helperText={formik.touched.CustomerName && formik.errors.CustomerName}
                        />
                        <TextField
                          id="CustomerNumber"
                          label="Customer Number"
                          variant="outlined"
                          type="number"
                          placeholder="ph :0300-1234567"
                          name="CustomerNumber"
                          value={formik.values.CustomerNumber}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.CustomerNumber && Boolean(formik.errors.CustomerNumber)}
                          helperText={formik.touched.CustomerNumber && formik.errors.CustomerNumber}
                        />
                        <TextField
                          id="EventType"
                          label="Event Type"
                          variant="outlined"
                          type="text"
                          placeholder="Event Type"
                          name="EventType"
                          value={formik.values.EventType}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.EventType && Boolean(formik.errors.EventType)}
                          helperText={formik.touched.EventType && formik.errors.EventType}
                        />
                      </Grid>
                      <Grid container gap={3} paddingTop={3}>
                        <Grid width={'23%'}>
                          <FormControl fullWidth>
                            <InputLabel>Event Time</InputLabel>
                            <Select
                              id="EventTime"
                              label="Event Time"
                              variant="outlined"
                              type="text"
                              placeholder=" Select Time"
                              name="EventTime"
                              value={formik.values.EventTime}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.EventTime && Boolean(formik.errors.EventTime)}
                              helperText={formik.touched.EventTime && formik.errors.EventTime}
                            >
                              <MenuItem value={'12:00 PM - 04:00 PM'}>12:00 PM - 04:00 PM</MenuItem>
                              <MenuItem value={'06:00 PM - 10:00 PM'}>06:00 PM - 10:00 PM</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <TextField
                          id="EventDate"
                          variant="outlined"
                          type="date"
                          placeholder="Select Event Date"
                          name="EventDate"
                          value={formik.values.EventDate}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.EventDate && Boolean(formik.errors.EventDate)}
                          helperText={formik.touched.EventDate && formik.errors.EventDate}
                        />
                      </Grid>
                    </Grid>
                  )}
                  {activeStep === 2 && (
                    <>
                      <Grid container gap={2} padding={2}>
                        <TextField
                          id="StagePrice"
                          label="Stage Price"
                          variant="outlined"
                          type="number"
                          placeholder="Stage Price"
                          name="StagePrice"
                          value={formik.values.StagePrice}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.StagePrice && Boolean(formik.errors.StagePrice)}
                          helperText={formik.touched.StagePrice && formik.errors.StagePrice}
                        />
                        <TextField
                          id="DjPrice"
                          label="Dj Price"
                          variant="outlined"
                          type="number"
                          placeholder="Dj Price"
                          name="DjPrice"
                          value={formik.values.DjPrice}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.DjPrice && Boolean(formik.errors.DjPrice)}
                          helperText={formik.touched.DjPrice && formik.errors.DjPrice}
                        />
                        <TextField
                          id="FLowerPrice"
                          label="Sport Light "
                          variant="outlined"
                          type="number"
                          placeholder="Sport Light price"
                          name="FLowerPrice"
                          value={formik.values.FLowerPrice}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.FLowerPrice && Boolean(formik.errors.FLowerPrice)}
                          helperText={formik.touched.FLowerPrice && formik.errors.FLowerPrice}
                        />
                        <TextField
                          id="FLowerPrice"
                          label="Paper Mechine"
                          variant="outlined"
                          type="number"
                          placeholder="Paper Mechine Price"
                          name="FLowerPrice"
                          value={formik.values.FLowerPrice}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.FLowerPrice && Boolean(formik.errors.FLowerPrice)}
                          helperText={formik.touched.FLowerPrice && formik.errors.FLowerPrice}
                        />
                      </Grid>
                      <Grid container gap={2} p={2}>
                        <TextField
                          id="SnowPrice"
                          label="Snow Gun"
                          variant="outlined"
                          type="number"
                          placeholder="Select Event Date"
                          name="SnowPrice"
                          value={formik.values.SnowPrice}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.SnowPrice && Boolean(formik.errors.SnowPrice)}
                          helperText={formik.touched.SnowPrice && formik.errors.SnowPrice}
                        />
                        <TextField
                          id="EntryPrice"
                          label="Couple Entry"
                          variant="outlined"
                          type="number"
                          placeholder="Couple Entry"
                          name="EntryPrice"
                          value={formik.values.EntryPrice}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.EntryPrice && Boolean(formik.errors.EntryPrice)}
                          helperText={formik.touched.EntryPrice && formik.errors.EntryPrice}
                        />
                        <TextField
                          id="TrustPrice"
                          label="Trust Light"
                          variant="outlined"
                          type="number"
                          placeholder="Trust Light price"
                          name="TrustPrice"
                          value={formik.values.TrustPrice}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.TrustPrice && Boolean(formik.errors.TrustPrice)}
                          helperText={formik.touched.TrustPrice && formik.errors.TrustPrice}
                        />
                        <TextField
                          id="ChoktaPrice"
                          label="Chokta & DanceFloor"
                          variant="outlined"
                          type="number"
                          placeholder="Chokta & DanceFloor"
                          name="ChoktaPrice"
                          value={formik.values.ChoktaPrice}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.ChoktaPrice && Boolean(formik.errors.ChoktaPrice)}
                          helperText={formik.touched.ChoktaPrice && formik.errors.ChoktaPrice}
                        />
                      </Grid>
                      <Grid container gap={2} p={2}>
                        <TextField
                          id="AnarQuantity"
                          label="Anar Quantity"
                          variant="outlined"
                          type="number"
                          placeholder="Anar Quantity"
                          name="AnarQuantity"
                          value={formik.values.AnarQuantity}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.AnarQuantity && Boolean(formik.errors.AnarQuantity)}
                          helperText={formik.touched.AnarQuantity && formik.errors.AnarQuantity}
                        />
                        <TextField
                          id="AnarPrice"
                          label="Anar Price"
                          variant="outlined"
                          type="number"
                          placeholder="Anar Price"
                          name="AnarPrice"
                          value={formik.values.AnarPrice}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.AnarPrice && Boolean(formik.errors.AnarPrice)}
                          helperText={formik.touched.AnarPrice && formik.errors.AnarPrice}
                        />
                        <TextField
                          id="Extraoption1"
                          label="Extra Option"
                          variant="outlined"
                          type="number"
                          placeholder="Extra"
                          name="Extraoption1"
                          value={formik.values.Extraoption1}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.Extraoption1 && Boolean(formik.errors.Extraoption1)}
                          helperText={formik.touched.Extraoption1 && formik.errors.Extraoption1}
                        />
                        <TextField
                          id="Extraoption2"
                          label="Extra Option"
                          variant="outlined"
                          type="number"
                          placeholder="Extra Option"
                          name="Extraoption2"
                          value={formik.values.Extraoption2}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.Extraoption2 && Boolean(formik.errors.Extraoption2)}
                          helperText={formik.touched.Extraoption2 && formik.errors.Extraoption2}
                        />
                      </Grid>
                      <Button type="submit">add event</Button>
                    </>
                  )}

                  <Grid item xs={12}>
                    {activeStep > 0 && (
                      <Button variant="contained" color="secondary" onClick={handleBack} sx={{ marginLeft: 8 }}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      type="submit"
                      disabled={activeStep === steps.length - 1}
                    >
                      {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
        </Grid>
      </Container>
    </Grid>
  );
}
