import { useNavigate } from 'react-router-dom'
const ThemeParkSvg = ({ attractions }) => {
  const navigate = useNavigate()

  const handleAttractionClick = (attraction) => {
    navigate(`/attractions/${attraction.id}`, {
      state: { attraction }
    })
  }

  if (!attractions) {
    return null
  }
  const svgWidth = 650
  const svgHeight = 688

  return (
    <div className="theme-park-svg-container">
      <svg className="theme-park-svg" width={svgWidth} height={svgHeight}>
        {attractions.map((attraction) => (
          <circle
            key={attraction.id}
            cx={attraction.x}
            cy={attraction.y}
            r={attraction.r}
            fill="rgba(255, 255, 255, 0)"
            onClick={() => handleAttractionClick(attraction)}
          />
        ))}
      </svg>
    </div>
  )
}

export default ThemeParkSvg
