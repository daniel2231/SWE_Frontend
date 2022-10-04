import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const cardBgColor = { 초급: '#FDF0E7', 중급: '#E7FDF6', 고급: '#F0F4FD' };
const circleBgColor = { 초급: '#FF8E56', 중급: '#A0F2DA', 고급: '#3075F9' };

const HomeCard = ({ circleTitle, stepTitle, linkTo }) => {
  return (
    <Card
      sx={{
        minWidth: 210,
        minHeight: 250,
        backgroundColor: cardBgColor[circleTitle],
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Avatar
          sx={{
            bgcolor: circleBgColor[circleTitle],
            color: 'black',
            fontWeight: 'bold',
            letterSpacing: '3px',
            width: 80,
            height: 80
          }}
        >
          {circleTitle}
        </Avatar>
        <Typography
          component="div"
          variant="p"
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'black',
            marginTop: 1,
            letterSpacing: -1
          }}
        >
          {stepTitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={linkTo} style={{ textDecoration: 'none', color: 'black' }}>
          <Button
            size="medium"
            sx={{
              fontSize: '16px',
              fontWeight: 'regular',
              borderRadius: 5,
              backgroundColor: 'white',
              padding: '5px 40px',
              boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, .25)'
            }}
          >
            더보기
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default HomeCard;
