
import Card from "../UI/card";
import classes from "./candysAvailable.module.css";
import CandyItem from "./candyItem/candyItem";

const CandysAvailable = (props) => {
  return (
    <section className={classes.candys}>
      <Card>
        <ul>
          {
           props.candysAvailable.map((item) => {
            return (
              <CandyItem
                key={Math.random()}
                name={item.name}
                description={item.description}
                price={item.price}
                candysAvailable={props.candysAvailable}
              />
            )})}
        </ul>
      </Card>
    </section>
  );
};

export default CandysAvailable;