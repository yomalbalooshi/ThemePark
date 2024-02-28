import { Link } from 'react-router-dom'
import Zone from './Zone'
import ZonesSvg from './ZonesSvg'
import { useEffect, useState } from 'react'

const Home = ({ themeParkData }) => {
  return (
    <div>
      <div className="zonemap-main-div">
        <div className="zonemap-image-div">
          <div className="zonemap-imagecontainer-div">
            <img src="/images/zonesMap.svg" alt="Map of all parks" />
          </div>
          <ZonesSvg zones={themeParkData} />
        </div>
        <div className="zonemap-information-div">
          <h2 className="zonemap-information-title">Explore Our Zones</h2>
          <p className="zonemap-information-paragraph">
            Welcome to our diverse theme park! Dive into the water wonders of
            Splash Kingdom, enjoy whimsical adventures in Kidtopia, explore the
            enchanting Kingdom of Dreams, and relax in the tropical paradise of
            Tropical Tides. From thrilling rides to magical landscapes, our park
            offers a memorable experience for all ages, where imagination comes
            to life.
          </p>
          <ul className="homepage-zone-ul">
            <div>
              {themeParkData.map((themePark) => (
                <li className="homepage-zone-li" key={themePark._id}>
                  <Link to={`zone/${themePark._id}`}>{themePark.name}</Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Home
