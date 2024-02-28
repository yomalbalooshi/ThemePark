import { useNavigate } from 'react-router-dom'
const ZonesSvg = ({ zones }) => {
  const navigate = useNavigate()

  const handleZoneClick = (zone) => {
    navigate(`/zone/${zone._id}`, {
      state: { zone }
    })
  }

  if (!zones) {
    return null
  }
  const svgWidth = 800
  const svgHeight = 800
  return (
    <div className="theme-park-svg-container">
      <svg className="theme-park-svg" width={svgWidth} height={svgHeight}>
        {zones.map((zone) => (
          <circle
            key={zone._id}
            cx={zone.x}
            cy={zone.y}
            r={zone.r}
            fill="rgba(0, 0, 0, 0)"
            onClick={() => handleZoneClick(zone)}
          />
        ))}
      </svg>
    </div>
  )
}

export default ZonesSvg
