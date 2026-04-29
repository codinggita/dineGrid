import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url, type = 'website' }) => {
  const siteTitle = 'DineGrid';
  const fullTitle = title ? `${title} | ${siteTitle}` : 'DineGrid - Culinary Queue Management';
  const defaultDesc = 'DineGrid is the ultimate culinary queue management system for premium dining experiences.';
  const siteUrl = 'https://dine-grid.vercel.app';
  const defaultImage = `${siteUrl}/logo.png`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO;
