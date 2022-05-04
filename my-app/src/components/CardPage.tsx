import React, { FC } from "react";
import Card, { CardVariant } from "../components/Card";

const CardPage: FC = () => {
  return (
    <div>
      <Card
        onClick={(num: number) => console.log("click", num)}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>X</button>
      </Card>
    </div>
  );
};

export default CardPage;
