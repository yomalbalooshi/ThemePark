import Attraction from './Attraction'
import ThemeParkSvg from './ThemeParkSvg'
import { useState } from 'react'
const Zone = ({ parkName, attractions }) => {
  const [selectedAttraction, setSelectedAttraction] = useState(null)
  const handleAttractionClick = (attractionId) => {
    setSelectedAttraction(attractionId)
  }
  return (
    <div style={{ position: 'relative' }}>
      <h1>zone</h1>
      {/* TEMPORARY IMAGE FILE could then be: /${parkName}.jpg */}

      <img
        className="theme-park-map"
        width="800"
        height="600"
        src="images/dummyThemePark.jpeg"
        alt="theme park map"
      />
      <ThemeParkSvg
        attractions={attractions}
        onClick={(attractionId) => handleAttractionClick(attractionId)}
      />
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
  )
}
export default Zone
