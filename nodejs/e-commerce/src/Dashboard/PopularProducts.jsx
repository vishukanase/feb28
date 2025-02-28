import React from "react";
 
const PopularProducts = () => {
  const productData = [
    { name: "Apple iPhone 13", id: "#FXZ-4567", price: "$999.29", img: "Img" },
    { name: "Nike Air Jordan", id: "#FXZ-3456", price: "$72.40", img: "Img" },
    { name: "Beats Studio 2", id: "#FXZ-9485", price: "$99", img: "Img" },
    { name: "Apple Watch Series 7", id: "#FXZ-2345", price: "$249.99", img: "Img" },
    { name: "Amazon Echo Dot", id: "#FXZ-8959", price: "$79.40", img: "Img" },
    { name: "Play Station Console", id: "#FXZ-7892", price: "$129.48", img: "Img" },
  ];
 
  return (
    <div className="bg-CardColor w-[438px] text-white p-5 ml-6 mt-5 rounded-lg">
      
      <h1 className="text-lg font-bold">Popular Products</h1>
      <p className="text-gray-400 text-sm">Total 10.4k Visitors</p>
 
      <div className="mt-4 space-y-4">
        {productData.map((item, index) => (
            // when you are using () no need of return stmt but {} then use return keyword
          <div key={index} className="flex justify-between items-center">
            {/* justify-between pushes one div to left and another right ?? */}
            <div className="flex space-x-4">
                <img src={item.img} className="w-10 h-10 rounded-lg"/>
              <div>
                <h3 className="text-base">{item.name}</h3>
                <p className="text-sm">{item.id}</p>
              </div>
            </div>
 
            <p className="text-sm">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default PopularProducts;
