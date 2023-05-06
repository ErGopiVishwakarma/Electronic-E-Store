import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@chakra-ui/react';












export default function AddressForm() {

const [firstName, setFirstName]=React.useState('');
const [lastName, setLastName]=React.useState('');
const [state,setState]=React.useState('');
const [city, setCity]=React.useState('');
const [country, setCountry]=React.useState('');
const [zip, setZip]=React.useState('');
const [phone, setPhone]=React.useState('');
const [email, setEmail]=React.useState('');
const [address, setAddress]=React.useState('');
const [address2, setAddress2]=React.useState('');



const userDetails = {
  firstName,
  lastName,
  state,
  city,
  country,
  zip,
  phone,
  email,
  address,
  address2,
}


const handleSubmit=()=>{

  
}







// console.log("stateChekker",state)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"

            onChange={(e) => setFirstName(e.target.value)}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e) => setLastName(e.target.value) }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) =>setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={(e) => setAddress2(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(e) =>setCity(e.target.value) }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={(e) => setState(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(e) => setZip(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={(e) => setCountry(e.target.value)}
          />
        </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="phone"
          name="phone"
          label="Phone number"
          fullWidth
          variant="standard"
          type={'number'}
        
          onChange={(e) => setPhone(e.target.value) }
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="email"
          name="email"
          label="Email address"
          fullWidth
          variant="standard"
          type={'email'}
          onChange={(e) =>setEmail(e.target.value) }
        />
      </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>

    <Button onSubmit={handleSubmit}>Save</Button>

      </Grid>
    </React.Fragment>
  );
}