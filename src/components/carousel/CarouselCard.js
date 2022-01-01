import React from "react";
import useStyles from "./CarouselStyle";
import CarouselData from "./CarouselData";
function CarouselCard() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.carousel_container}>
        {CarouselData.map((item) => {
          return (
            <div className={classes.carousel_card}>
              <img src={item.img} />
              <h3> {item.title}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CarouselCard;
