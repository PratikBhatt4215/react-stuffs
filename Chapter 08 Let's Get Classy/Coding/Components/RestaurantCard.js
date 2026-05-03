import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#D3D3D3",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log("working");
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/508x320?text=No+Image";
        }}
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating}Stars</h4>
      <h4>₹{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
