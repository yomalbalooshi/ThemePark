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
    <div>
      <h1>attraction details</h1>
      <p>{attractionDetails.name}</p>
      <button className="zonesBackButton" onClick={() => backButtonOnClick()}>
        Back
      </button>
    </div>
  ) : (
    'no attraction found :('
  )
}
export default AttractionDetails
