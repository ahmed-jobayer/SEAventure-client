const DefaultTouristSpot = () => {
  fetch("http://localhost:5000/defultTouristSpots")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
  <div>

  </div>
  )
};

export default DefaultTouristSpot;
