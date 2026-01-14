import seriesData from "../api/SeriesData.json";
import {SeriesCard} from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three-cols">
      {seriesData.map((curElem) => (
        <SeriesCard key={curElem.id} data={curElem} />
      ))}
    </ul>
  );
};

export default NetflixSeries;

