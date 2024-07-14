import React, { useState } from "react";
import dataGlasses from "../assets/dataGlasses.json";
const Content = () => {
  const [glass, setGlass] = useState("/glassesImage/v1.png");
  const searchGlass = (findGlass) => {
    for (let glass of dataGlasses) {
      if (findGlass === glass.url) {
        return glass;
      }
    }
  };
  const findGlass = searchGlass(glass);
  console.log(findGlass);
  return (
    <div className="container mx-auto">
      <div className="mx-auto py-5 grid grid-cols-2 w-1/2">
        <div className="relative w-full">
          <img src="/image/model.jpg" alt="" />
          <div className="absolute top-24">
            <img src={glass} alt="" className="w-1/2 mx-auto" />
          </div>
        </div>
        <div className="bg-white pt-20 h-80 w-full">
          <img src={glass} alt="" className=" w-full mx-auto h-auto" />
          <div className="bg-white mt-20">
            <div>
              <h3 className="font-bold">
                Name: {findGlass ? findGlass.name : "GUCCI G8850U"}
              </h3>
              <p className="font-bold">
                Price:{" "}
                <span className="text-green-600 font-bold">
                  {findGlass ? findGlass.price : 30} $
                </span>
              </p>
              <p>
                Desc:{" "}
                {findGlass
                  ? findGlass.desc
                  : "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto py-5 grid grid-cols-7 w-3/4 gap-3">
        {dataGlasses.map((item, index) => (
          <div>
            <img
              src={item.url}
              key={index}
              onClick={() => {
                setGlass(item.url);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
