import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../useTransactions';

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === 'INCOME' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader='Data Chart' />
      <CardContent>
      
        <Typography variant="h5">Rs{total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
