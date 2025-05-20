import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = 'Gülheda - Kişisel Portfolyo',
  description = 'Gülheda\'nın kişisel portfolyo sitesi. Web geliştirme, tasarım ve yazılım projeleri.',
  keywords = 'web geliştirme, tasarım, yazılım, portfolyo, gülheda',
  image = '/og-image.jpg',
  url = 'https://gulheda.com'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Turkish" />
      <meta name="author" content="Gülheda" />
    </Helmet>
  );
};

export default SEO; 