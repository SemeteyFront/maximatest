import React from 'react';

function Footer() {
  return (
    <footer id='footer' className='footer-1'>
      <div className='main-footer widgets-dark typo-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-6 col-md-3'>
              <div className='widget subscribe no-box'>
                <h5 className='widget-title'>
                  COMPANY NAME<span></span>
                </h5>
                <p>About the company, little discription will goes here.. </p>
              </div>
            </div>

            <div className='col-xs-12 col-sm-6 col-md-3'>
              <div className='widget no-box'>
                <h5 className='widget-title'>
                  Get Started<span></span>
                </h5>
                <p>Get access to your full Training and Marketing Suite.</p>
              </div>
            </div>

            <div className='col-xs-12 col-sm-6 col-md-3'>
              <div className='widget no-box'>
                <h5 className='widget-title'>
                  Contact Us<span></span>
                </h5>

                <p>
                  <a href='mailto:boronbaevsemetey@gmail.com' title='glorythemes'>
                    boronbaevsemetey@gmail.com
                  </a>
                </p>
                <ul className='social-footer2' style={{ display: 'flex', gap: '10px' }}>
                  <li className=''>
                    <a title='youtube' target='_blank' href='/'>
                      <img
                        alt='youtube'
                        width='30'
                        height='30'
                        src='https://cdn.iconscout.com/icon/free/png-256/youtube-1464540-1239451.png'
                      />
                    </a>
                  </li>
                  <li className=''>
                    <a href='/' target='_blank' title='Facebook'>
                      <img
                        alt='Facebook'
                        width='30'
                        height='30'
                        src='https://logoeps.com/wp-content/uploads/2014/01/33702-facebook-logo-icon-vector-icon-vector-eps.png'
                      />
                    </a>
                  </li>
                  <li className=''>
                    <a href='/' target='_blank' title='Twitter'>
                      <img
                        alt='Twitter'
                        width='30'
                        height='30'
                        src='https://logoeps.com/wp-content/uploads/2014/01/23931-twitter-logo-icon-vector-icon-vector-eps.png'
                      />
                    </a>
                  </li>
                  <li className=''>
                    <a title='instagram' target='_blank' href='/'>
                      <img
                        alt='instagram'
                        width='30'
                        height='30'
                        src='data:image/png;base64,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'
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
