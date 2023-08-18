import { useState } from "react";
import "./SingleProductImage.css";

const SingleProductImage = ({ image = [{ url: " " }] }) => {
  const [mainImg, setMainImg] = useState(image[0]);
  return (
    <>
      <div className="imageCollections">
        {image.map((Element, index) => (
          <figure key={index}>
            <img
              src={Element.url}
              alt={Element.FileName}
              className="img"
              onClick={() => setMainImg(Element)}
            />
          </figure>
        ))}
      </div>
      <div className="main_image">
        <figure>
          <img src={mainImg.url} alt={mainImg.FileName} />
        </figure>
      </div>
    </>
  );
};

export default SingleProductImage;
