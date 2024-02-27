import { useNavigate } from 'react-router-dom'
const ZonesSvg = ({ zones }) => {
  const navigate = useNavigate()

  const handleZoneClick = (zone) => {
    navigate(`/zone/${zone.mapId}`, {
      state: { zone }
    })
  }

  if (!zones) {
    return null
  }
  const svgWidth = 800
  const svgHeight = 800
  console.log(`zones:${zones[0].mapId}`)
  return (
    <div className="theme-park-svg-container">
      <svg className="theme-park-svg" width={svgWidth} height={svgHeight}>
        {zones.map((zone) => (
          <circle
            key={zone.mapId}
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
