import Attraction from './Attraction'
import ThemeParkSvg from './ThemeParkSvg'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Zone = ({ themeParkData }) => {
  console.log('themeParkData: ', themeParkData)
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

  const [selectedAttraction, setSelectedAttraction] = useState(null)

  const handleAttractionClick = (attractionId) => {
    setSelectedAttraction(attractionId)
  }
  //     <div>
  //       {/* <ThemeParkSvg
  //         attractions={themeParkDetails.attractions}
  //         onClick={(attractionId) => handleAttractionClick(attractionId)}
  //       /> */}
  // </div>

  return themeParkDetails ? (
    <div className="zoneattractions-main-div">
      <div className="zoneattractions-image-div">
        <div className="zoneattractions-imagecontainer-div">
          <img
            className="zone-map"
            width="650"
            src="/images/pink-0.png"
            alt="theme park map"
          />
        </div>
      </div>
      <div className="zoneAttractions-information-div">
        <h2 className="zoneAttractions-information-title">
          {themeParkDetails.mapName}
        </h2>
        <p className="zoneAttractions-information-paragraph">
          {themeParkDetails.description}
        </p>
        <div>
          {/* Uncomment the following line if you want to use ThemeParkSvg component */}
          {/* <ThemeParkSvg
            attractions={themeParkDetails.attractions}
            onClick={(attractionId) => handleAttractionClick(attractionId)}
          /> */}
          {themeParkDetails && themeParkDetails.attractions && (
            <ul className="zonepage-attractions-ul">
              {themeParkDetails.attractions.map((attraction) => (
                <li key={attraction.id}>{attraction.id}</li>
              ))}
            </ul>
          )}
        </div>
        {selectedAttraction && (
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              background: 'white',
              padding: '10px',
              zIndex: 2
            }}
          >
            <h3>{selectedAttraction}</h3>
          </div>
        )}
      </div>
    </div>
  ) : (
    'no park found'
  )
}

export default Zone
