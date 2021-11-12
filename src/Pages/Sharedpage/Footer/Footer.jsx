import { Grid } from '@mui/material';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Grid container spacing={2} sx={{ textAlign: 'center' }}>
        <Grid item sm={12} md={4}>
          <h4>Office-1 (main)</h4>
          <address className="address">
            Chittagong <br />
            Road: Kazi Nazrul Road <br />
            House: Hasan Vhobon 22/3
          </address>
        </Grid>
        <Grid item sm={12} md={4}>
          <h4>Office-2</h4>
          <address className="address">
            Dhaka <br />
            Road: Shabagh Bus Stand <br />
            House: Zilla Complex, 2nd floor
          </address>
        </Grid>
        <Grid item sm={12} md={4}>
          <h4>Contact</h4>
          <address className="contact-us">
            <div>
              <span>
                <i className="fas fa-mobile-alt footer-icon"></i>
              </span>{' '}
              <a className="footer-link" href="tel:+8801867100385">
                01867100385
              </a>
            </div>
            <div>
              <span>
                <i className="fas fa-envelope footer-icon"></i>
              </span>{' '}
              <a className="footer-link" href="mailto:robeyoulawal@gmail.com">
                robeyoulawal@gmail.com
              </a>
            </div>
            <div>
              <span>
                <i className="fab fa-facebook-square footer-icon"></i>
              </span>{' '}
              <a
                className="footer-link"
                href="https://www.facebook.com/robeyoulawalraju1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Runner Cycle
              </a>
            </div>
          </address>
        </Grid>
      </Grid>
      <small>created by &copy; Robeyoul Awal Raju</small>
    </div>
  );
};

export default Footer;
