const ThemeParkSvg = ({ attractions, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 600"
    style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
  >
    {attractions.map((attraction) => (
      <circle
        key={attraction.id}
        id={attraction.id}
        cx={attraction.x}
        cy={attraction.y}
        r="10"
        fill={attraction.color}
        onClick={() => onClick(attraction.id)}
      />
    ))}
  </svg>
)
export default ThemeParkSvg
