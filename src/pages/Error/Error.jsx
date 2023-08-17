import React from 'react'
import { Link } from 'react-router-dom';

import "./error.scss"

const Error = () => {
  return (
    <div className='error-container'>
        <h2 className='error-container__title'>404</h2>
        <p className='error-container__paragraphe'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error;
