import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StanContext } from "../context";

const StanTypeSelection = () => {
  const { setStanType } = useContext(StanContext);
  const stanovi = [
    {
      id: 1,
      name: "GARSONJERE i JEDNOSOBNI stanovi",
      imgUrl:
        "https://vuksainzenjering.com/wp-content/uploads/2021/07/garsonjere-i-jednosobni-stanovi.jpg",
    },
    {
      id: 2,
      name: "JEDNOIPOSOBNI stanovi",
      imgUrl:
        "https://vuksainzenjering.com/wp-content/uploads/2021/07/jednoiposobni.jpg",
    },
    {
      id: 3,
      name: "DVOSOBNI stanovi",
      imgUrl:
        "https://vuksainzenjering.com/wp-content/uploads/2021/07/dvosobni.jpg",
    },
    {
      id: 4,
      name: "DVOIPOSOBNI stanovi",
      imgUrl:
        "https://vuksainzenjering.com/wp-content/uploads/2021/07/dvoiposobni-stanovi.jpg",
    },
    {
      id: 5,
      name: "TROSOBNI stanovi",
      imgUrl:
        "https://vuksainzenjering.com/wp-content/uploads/2021/07/dvosobni-18.jpg",
    },
    {
      id: 6,
      name: "ČETVOROSOBNI stanovi",
      imgUrl:
        "https://vuksainzenjering.com/wp-content/uploads/2021/07/dvosobni-18.jpg",
    },
  ];
  return (
    <div className="w-[80%] py-8 grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
      {stanovi.map((stan) => {
        return (
          <div
            key={stan.id}
            className="border-2 border-solid border-teal-600"
            onClick={() => {
              setStanType(stan.name);
            }}>
            <Link to="/apartments-listing">
              <img src={stan.imgUrl} alt="stanovi" />
              <h2 className="text-center text-white text-lg py-2 font-light">
                {stan.name}
              </h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default StanTypeSelection;
