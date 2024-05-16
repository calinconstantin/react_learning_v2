import React from "react";
import styles from './Content.scss';
import { Carousel } from "../Carousel/Carousel";
import { ProductTile } from "../ProductTile/ProductTile";
import { CarouselProducts } from "../CarouselProducts/CarouselProducts";


export function Content() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$10.99",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
      btnValue: 'Press me!'
    },
    {
      id: 2,
      name: "Product 2",
      price: "$19.99",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
      btnValue: 'Press me!'
    },
    {
      id: 3,
      name: "Product 3",
      price: "$15.49",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
      btnValue: 'Press me!'
    },
    {
      id: 4,
      name: "Product 4",
      price: "$12.99",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
      btnValue: 'Press me!'
    },
    {
      id: 5,
      name: "Product 5",
      price: "$8.99",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
      btnValue: 'Press me!'
    },
    {
      id: 6,
      name: "Product 6",
      price: "$14.99",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
      btnValue: 'Press me!'
    },
    {
      id: 7,
      name: "Product 7",
      price: "$11.49",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
      btnValue: 'Press me!'
    },
    {
      id: 8,
      name: "Product 8",
      price: "$9.99",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
      btnValue: 'Press me!'
    },
    {
      id: 9,
      name: "Product 9",
      price: "$17.99",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
      btnValue: 'Press me!'
    },
    {
      id: 10,
      name: "Product 10",
      price: "$13.49",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
      btnValue: 'Press me!'
    },
    {
      id: 11,
      name: "Product 11",
      price: "$16.99",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
      btnValue: 'Press me!'
    },
    {
      id: 12,
      name: "Product 12",
      price: "$22.99",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
      btnValue: 'Press me!'
    }
  ];
  return (
    <>
      <div className='content container'>
        <Carousel />
        <CarouselProducts products={products} />
      </div>
    </>
  )
}