import ThemeParkSvg from './ThemeParkSvg'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Zone = ({ themeParkData }) => {
  const navigate = useNavigate()
  const backButtonOnClick = () => {
    navigate('/')
  }
  const [themeParkDetails, setThemeParkDetails] = useState({})
  let { mapId } = useParams()
  useEffect(() => {
    let selectedPark = themeParkData.find((park) => park.mapId == mapId)
    if (selectedPark) {
      setThemeParkDetails(selectedPark)
    } else {
      setThemeParkDetails({})
    }
  }, [mapId, themeParkData])
  return themeParkDetails ? (
    <div className="zoneattractions-main-div">
      <div className="zoneattractions-image-div">
        <div className="zoneattractions-imagecontainer-div">
          <img
            className="zone-map"
            width="650px"
            src={themeParkDetails.image}
            alt="theme park map"
          />
        </div>
        <ThemeParkSvg attractions={themeParkDetails.attractions} />
      </div>
      <div className="zoneAttractions-information-div">
        <h2 className="zoneAttractions-information-title">
          {themeParkDetails.mapName}
        </h2>
        <p className="zoneAttractions-information-paragraph">
          {themeParkDetails.description}
        </p>
        <div>
          {themeParkDetails && themeParkDetails.attractions && (
            <ul className="zonepage-attractions-ul">
              {themeParkDetails.attractions.map((attraction) => (
                <li key={attraction.id}>{attraction.name}</li>
              ))}
            </ul>
          )}
        </div>
        <button className="zonesBackButton" onClick={() => backButtonOnClick()}>
          Back
        </button>
      </div>
    </div>
  ) : (
    'no park found'
  )
}

export default Zone
