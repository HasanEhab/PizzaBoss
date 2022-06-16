import React from "react";
import { useSelector } from "react-redux";
import PizzaCard from "./PizzaCard";

function PizzaList() {
  const allpizza = useSelector((state) => state.pizza.pizza);

  return (
    <div id='menu' className="container d-flex flex-wrap p-4 justify-content-center">
      {allpizza.length
        ? allpizza.map((pizza) => (
            <PizzaCard
              page={'home'}
              data={pizza}
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              likes={pizza.likes}
              desc={pizza.desc}
              img={pizza.img}
            />
          ))
        : "There is No Pizza"}
    </div>
  );

}

export default PizzaList;
