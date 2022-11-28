import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props

  return (
    <div className="planets-app-container" testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
