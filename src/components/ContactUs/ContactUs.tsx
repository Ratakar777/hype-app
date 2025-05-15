"use client";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";

export const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:");
  };

  return (
    <Box>
      <Typography variant='h3' textAlign='center' color='white' mb={4}>
        Contact Us
      </Typography>
      <Box component='form' onSubmit={handleSubmit}>
        <Grid
          container
          flexDirection='column'
          gap={3}
          width='100%'
          alignItems='center'
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              name='name'
              label='Name'
              placeholder='Enter your name'
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              name='email'
              type='email'
              label='Email'
              placeholder='Email'
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              name='note'
              label='Note'
              placeholder='Notes'
              rows={5}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Button fullWidth variant='contained' type='submit'>
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
