import React, { useContext } from "react";
import "./collectibles.css";
import { CollectiblesContent } from "../Collectibles";

function CollectiblesBtn() {
  const { product, changeProduct } = useContext(CollectiblesContent);

  return (
    <main className="collectibles-btn-container">
      <div>
        {product.map((icon, index) => {
          return (
            <section className="collectibles-btn" key={index}>
              <img
                src={icon.image}
                onClick={() => changeProduct(index)}
                alt="img"
              />
            </section>
          );
        })}
      </div>
    </main>
  );
}

export default CollectiblesBtn;
