import React from 'react';
import Image from 'next/image';
import  {data} from '../../data/data'
export default function About() {
  return (
    <div className="about-page p-8" style={{color:'black'}} data-theme="light">

      <h1 className="text-4xl font-bold mb-4">Welcome to Our Company</h1>
      <p className="text-lg mb-6 p-2">
        At Our Company, we're passionate about providing high-quality drinks
        and creating memorable experiences for our customers. Our mission is to
        elevate your beverage enjoyment to new heights.
      </p>
      <p className="text-lg mb-6 p-2">
        Our journey began with a simple idea: to craft exceptional beverages
        that not only quench thirst but also tantalize taste buds. With our
        commitment to quality and innovation, we've grown into a beloved brand
        known for our diverse selection of drinks and impeccable service.
      </p>
      <p className="text-lg mb-6 p-2">
        Whether you're craving a refreshing iced tea on a hot summer day or
        indulging in a cozy cup of coffee on a chilly morning, we've got
        something for everyone. From classic favorites to creative concoctions,
        our menu is designed to delight and inspire.
      </p>
      <p className="text-lg mb-6 p-2">
        Beyond our delicious drinks, we're dedicated to fostering a welcoming
        atmosphere where every customer feels valued and appreciated. We believe
        that great service is just as important as great taste, which is why
        our team goes above and beyond to ensure your experience is nothing
        short of exceptional.
      </p>
      <div className="carousel carousel-end rounded-box" data-theme="light">
            <div className="carousel-item">
            {data.map((item, index) => (
      <div key={index} className="carousel-item">
        <img height="400px" width="400px" src={item.url} alt="Drink" className="rounded" />
      </div>
      ))}

        </div>

       

      </div>
    </div>
  );
}
