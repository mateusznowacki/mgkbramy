import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getCityBySlug } from '@/data/cities';
import CityPage from './CityPage';

const CityPageDynamic: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  if (!citySlug) {
    return <Navigate to="/" replace />;
  }

  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return <Navigate to="/" replace />;
  }

  return <CityPage cityName={city.name} cityNameDE={city.nameDE} />;
};

export default CityPageDynamic; 