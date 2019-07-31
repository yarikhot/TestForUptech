import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../config/routes';

export default function Header() {
  return <Link to={routes.help}>Help?</Link>;
}
