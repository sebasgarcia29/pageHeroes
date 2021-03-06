import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroById';
import { heroImages } from '../../helpers/heroImages';
// import batman from '../../assets/heroes/dc-batman.jpg'; // estatico

export const HeroScreen = ({ history }) => {

  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroesById(heroeId), [heroeId])

  if (!hero) {
    return <Redirect to='/' />
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('./');
    } else {
      history.goBack();
    }
  }

  const {
    alter_ego,
    characters,
    first_appearance,
    publisher,
    superhero
  } = hero;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          // src={`../assets/heroes/${heroeId}.jpg`} // desde public assets
          // src={batman} // importado directo desde react
          // src={heroImages(`./${heroeId}.jpg`)} // Dinamico desde react
          src={heroImages(`./${heroeId}.jpg`).default} // Dinamico desde react
          alt={superhero}
          className='img-thumbnail animate__animated animate__backInLeft'
        />
      </div>

      <div className='col-8'>
        <h3> {superhero} </h3>
        <ul className='list-group list-group-flish'>
          <li className='list-group-item'><b>Alter ego:</b> {alter_ego}  </li>
          <li className='list-group-item'><b> Publisher:</b> {publisher} </li>
          <li className='list-group-item'><b> First appearance:</b> {first_appearance}</li>
        </ul>


        <h5>Characters</h5>
        <p> {characters} </p>

        <button
          className='btn btn-primary'
          onClick={handleReturn}
        >
          Return
        </button>

      </div>
    </div>
  )
}
