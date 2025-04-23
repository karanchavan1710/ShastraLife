// import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Container component="main" maxWidth="md" className="!flex !flex-col !items-center !justify-center !min-h-screen">
      <img src={"https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg"} alt="Not Found" className="!w-1/2 !mb-6 mix-blend-multiply" />
      <div className="!text-center">
        <Typography variant="h1" className="!text-6xl !font-bold !text-red-500">
          404
        </Typography>
        <Typography variant="h5" className="!mt-4 !text-gray-700">
          Oops! The page you are looking for does not exist.
        </Typography>
        <Typography variant="body1" className="!mt-2 !text-gray-600">
          It might have been removed, or you may have entered the wrong URL.
        </Typography>
        <div className="!mt-6">
          <Link to="/">
            <Button variant="contained" color="primary">
              Go to Home
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default PageNotFound;