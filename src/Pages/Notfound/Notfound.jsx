import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import notFound from '../../images/notfound404.jpg';
import './Notfound.css';

const Notfound = () => {
  const history = useHistory();

  const handleHistory = () => {
    history.push('/');
  };
  return (
    <div className="notfound">
      <div className="notfound-img-container">
        <img src={notFound} alt="" />
      </div>
      <div className="notfound-btn-container">
        <Button variant="contained" onClick={handleHistory}>
          {' '}
          Home Page
        </Button>
      </div>
    </div>
  );
};

export default Notfound;
