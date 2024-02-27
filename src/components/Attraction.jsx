const Attraction = ({ id, x, y, onClick }) => {
  return (
    <circle
      id={id}
      cx={x}
      cy={y}
      r={10}
      fill="blue"
      onClick={() => onClick(id)}
    />
  )
}
export default Attraction
