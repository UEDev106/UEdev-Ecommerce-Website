// Category.jsx

// import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Home', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2A4cWcAyQE-DK0_wo-eELGgEo-J8prXd3LQ&s' },
    { name: 'Books', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4K1NH19hA01IDnN6Yjs_hsoJ4u4PiMprIyA&s' },
    { name: 'Laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAyleCq5vtZWVNkzhyJSfFwsV7KXNYTWQgSQ&s' },
    { name: 'Mobile', image: 'https://images.samsung.com/is/image/samsung/p6pim/pk/sm-s928bzkqpkd/gallery/pk-galaxy-s24-s928-489293-sm-s928bzkqpkd-thumb-539768257?$344_344_PNG$' },
    { name: 'Fashion', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRew6x5f3fWHhyAIfr5OD1RWpRKgbnhctAgtQ&s' },
    { name: 'Shirts', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyDNbF0hqHswqdCd_UqTaPQlaxlkEDkOicKQ&s' },
    { name: 'Jacket', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7pq_Mz8WqBtG1cBxOwTqmFaE0EovSn1C3Q&s' },
    { name: 'Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/products/${categoryName.toLowerCase()}`);
  };

  return (
    <div className="mt-5">
      <div className="flex flex-col">
        <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
          <div className="flex">
            {categories.map((category, index) => (
              <div key={index} className="px-3 lg:px-5">
                <div
                  onClick={() => handleCategoryClick(category.name)}
                  className="w-20 h-20 lg:w-32 lg:h-32 max-w-xs rounded-full bg-blue-500 transition-transform transform hover:scale-105 hover:bg-blue-400 cursor-pointer mb-1 flex items-center justify-center"
                  aria-label={`Category: ${category.name}`}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 lg:w-28 lg:h-28 object-cover rounded-full border-2 border-white shadow-lg"
                  />
                </div>
                <h1 className="text-sm lg:text-lg text-center font-medium title-font mt-2">{category.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .hide-scroll-bar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scroll-bar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Category;
