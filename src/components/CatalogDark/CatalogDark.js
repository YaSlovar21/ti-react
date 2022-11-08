import React from "react";
import { Link } from "react-router-dom";

import FormSearch from "../FormSearch/FormSearch";
import Card from "../Card/Card";
import CartDesc from "../CartDesc/CartDesc";

import './CatalogDark.css';
import plateTest from '../../images/ti/plasttest.png';


function CatalogDark(changecartfunction) {
    
    const [cartList, setCartList] = React.useState([]);

    function handleItemAddedToCart(item) {
      cartList.push(item);
      console.log(cartList);
    }

    const apparats = [
      { 
        pto : 'ti-025', 
        du: [25, 35],
        shpilka: [
          [0, 15],
          [16, 32],
          [33, 75],
          [76, 126]
        ]
      },
      { 
        pto : 'ti-077', 
        du: [25, 35],
        shpilka: [
          [0, 15],
          [16, 32],
          [33, 75],
          [76, 126]
        ]
      }
  
    ]

    const items = [
    { 
      id: 1,
      type: 'plast',
      pto: ['025', '077', '13', '16,5', '18', '28', '45', '52', '65', '82', '95', '116'],
      potok: ['h', 'l'],
      otv: ['1234', '0230', '1004', '0000'],
      /*не влияет на отрисовку*/
      material: ['aisi304', 'aisi316'],
      thickness: ['0.4', '0.5', '0.6'],
    }, 
    { 
      id: 2,
      type: 'uplot',
      pto: ['025', '077', '13', '16,5', '18', '28', '45', '52', '65', '82', '95', '116'],
      position: ['center', 'start', 'end'],
      /*не влияет на отрисовку*/
      material: ['epdm', 'fkm', 'nbr'],
    }, 
    { 
      id: 3,
      type: 'stanina',
      pto: ['025', '077', '13', '16,5', '18', '28', '45', '52', '65', '82', '95', '116'],
      otv: ['1200', '1234'],
    }, 
    {
      id: 4,
      type: 'plita', 
      pto: ['025', '077', '13', '16,5', '18', '28', '45', '52', '65', '82', '95', '116'],
      otv: ['0000', '1200','0034'],
    },
    {
      id: 5,
      type: 'styazhka',
      vid: ['niz', 'verh'],
      /* c 28 идут балки */
      pto: ['025', '077', '13', '16,5', '18', '28', '45', '52', '65', '82', '95', '116'],
    },
    {
      id: 6,
      type: 'shpilka',
      d: {
        m16: [180, 280, 410, 630],
        m24: [250, 350, 450, 500, 600, 750,850, 1000, 1150, 1250,1350,1450, 1650,1750,2100,2500],
        m36: [500, 600, 750, 1000, 1250, 1400, 1500, 1700],
      },
      pto: ['025', '077', '13', '16,5', '18', '28', '45', '52', '65', '82', '95', '116'],
    },
    {
      id: 7,
      type: 'opora',
    }
  ]; 

  
    React.useEffect(() => {
      
    }, [cartList]); 

    return (
      <section class="catalog-section">
        <div class="catalog-section__content">
          <FormSearch />
          <div class="catalog-section__grid">
            {
              ['025', '077', '13', '18'].map((element, i) => (
                <>
                  <Card type="plast" pto={element} plastPorts="0000" plastCanals="H" onAddedToCart={handleItemAddedToCart} />
                  <Card type="plast" pto={element} plastPorts="1004" plastCanals="H" onAddedToCart={handleItemAddedToCart} />
                  <Card type="plast" pto={element} plastPorts="0230" plastCanals="H" onAddedToCart={handleItemAddedToCart} />
                  <Card type="plast" pto={element} plastPorts="1234" plastCanals="H" onAddedToCart={handleItemAddedToCart} />
                  <Card type="plast" pto={element} plastPorts="0000" plastCanals="L" onAddedToCart={handleItemAddedToCart} />
                  <Card type="plast" pto={element} plastPorts="1004" plastCanals="L" onAddedToCart={handleItemAddedToCart} />
                  <Card type="plast" pto={element} plastPorts="0230" plastCanals="L" onAddedToCart={handleItemAddedToCart} />
                  <Card type="plast" pto={element} plastPorts="1234" plastCanals="L" onAddedToCart={handleItemAddedToCart} />
                  <Card type="uplot" pto={element} uplotPosition="center"/>
                  <Card type="uplot" pto={element} uplotPosition="start"/>
                  <Card type="uplot" pto={element} uplotPosition="end"/>
                </>
              ))
            }
          </div>
        </div>
        <CartDesc cartList={cartList}/>
      </section>
        
    );
}

export default CatalogDark;