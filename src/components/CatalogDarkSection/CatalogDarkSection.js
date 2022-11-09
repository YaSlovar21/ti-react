import React from "react";
import { Link } from "react-router-dom";

import FormSearch from "../FormSearch/FormSearch";
import Card from "../Card/Card";
import CartDesc from "../CartDesc/CartDesc";

import './CatalogDarkSection.css';
import plateTest from '../../images/ti/plasttest.png';


function CatalogDark() {
    
    const [cartList, setCartList] = React.useState([]);

    const [selectedPto, setSelectedPto] = React.useState('025');

    const [selectedMetall, setSelectedMetall] = React.useState('AISI304');
    const [selectedRubberMark, setSelectedRubberMark] = React.useState('EPDM');
    const [selectedThinckness, setSelectedThinckness] = React.useState('0.5');

    const [selectedDu, setSelectedDu] = React.useState('');

    function handleItemAddedToCart(item) {
      if (!cartList.includes(item)) {
        setCartList(cartList.concat(item));
      } else {
        setCartList(cartList.filter(v => v !== item));
      }
    }

    return (
      <section class="catalog-section">
        <div class="catalog-section__content">
          <FormSearch 
            selectedPto={selectedPto}
            setSelectedPto={setSelectedPto}

            selectedMetall={selectedMetall}
            setSelectedMetall={setSelectedMetall}
            selectedRubberMark={selectedRubberMark}
            setSelectedRubberMark={setSelectedRubberMark}
            selectedThinckness={selectedThinckness}
            setSelectedThinckness={setSelectedThinckness}
          />

          <div class="catalog-section__grid"> 
                  <Card type="plast" pto={selectedPto} plastPorts="0000" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="H" onAddedToCart={handleItemAddedToCart} />
                  <Card type="plast" pto={selectedPto} plastPorts="1004" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="H" onAddedToCart={handleItemAddedToCart} />
                  <Card type="plast" pto={selectedPto} plastPorts="0230" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="H" onAddedToCart={handleItemAddedToCart} />
                  <Card type="plast" pto={selectedPto} plastPorts="1234" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="H" onAddedToCart={handleItemAddedToCart} />
                  <Card type="plast" pto={selectedPto} plastPorts="0000" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="L" onAddedToCart={handleItemAddedToCart} />
                  <Card type="plast" pto={selectedPto} plastPorts="1004" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="L" onAddedToCart={handleItemAddedToCart} />
                  <Card type="plast" pto={selectedPto} plastPorts="0230" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="L" onAddedToCart={handleItemAddedToCart} />
                  <Card type="plast" pto={selectedPto} plastPorts="1234" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="L" onAddedToCart={handleItemAddedToCart} />
                  <Card type="uplot" pto={selectedPto} uplotPosition="center"  selectedRubberMark={selectedRubberMark}  onAddedToCart={handleItemAddedToCart}/>
                  <Card type="uplot" pto={selectedPto} uplotPosition="start"  selectedRubberMark={selectedRubberMark}  onAddedToCart={handleItemAddedToCart}/>
                  <Card type="uplot" pto={selectedPto} uplotPosition="end"  selectedRubberMark={selectedRubberMark}  onAddedToCart={handleItemAddedToCart}/>
          </div>
          <h3 className="catalog-section__title">Порты</h3>
        </div>

        <CartDesc cartList={cartList}/>
      </section>
        
    );
}

export default CatalogDark;