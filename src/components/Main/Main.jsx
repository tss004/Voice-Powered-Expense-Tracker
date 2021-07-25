import React, { useState, useEffect, useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { useSpeechContext } from '@speechly/react-client';
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';

const ExpenseTracker = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="EXPENSE TRACKER" titleTypographyProps={{variant:'h2' }} align="center"/>
      <CardContent>
        <Typography align="center" variant="h5">Total Valid Balance is <u>Rs.{balance}</u></Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExpenseTracker;
