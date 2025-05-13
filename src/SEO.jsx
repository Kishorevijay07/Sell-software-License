// src/components/SEO.js
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, image, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} />
      <meta property="og:url" content={url} /> */}

      {/* Twitter */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
    </Helmet>
  );
};

export default SEO;
