import { useEffect, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

const AttractionDetails = () => {
  let navigate = useNavigate()
  const { state: { attraction } = {} } = useLocation()
  const backButtonOnClick = () => {
    navigate('/')
  }
  const [attractionDetails, setAttractionDetails] = useState({})
  let { attractionId } = useParams()
  useEffect(() => {
    let selectedAttraction = attraction
    if (selectedAttraction) {
      setAttractionDetails(selectedAttraction)
    } else {
      setAttractionDetails({})
    }
  }, [attractionId, attraction])
  return attractionDetails ? (
    <div
      style={{
        backgroundImage: `url(${attractionDetails.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh'
      }}
    >
      <div className="attractiondetails-maindiv">
        <div className="attractiondetails-container">
          <div className="attractiondetails-infodiv">
            <h1 className="attractiondetails-name">{attractionDetails.name}</h1>
            <p className="attractiondetails-paragraph">
              {attractionDetails.description}
            </p>
            <button
              className="zonesBackButton"
              onClick={() => backButtonOnClick()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    'no attraction found :('
  )
}
export default AttractionDetails
