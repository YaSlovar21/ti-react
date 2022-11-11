import React from "react";
import { Link } from "react-router-dom";

import FormSearch from "../FormSearch/FormSearch";
import Card from "../Card/Card";
import CartDesc from "../CartDesc/CartDesc";

import './CatalogDarkSection.css';
import plateTest from '../../images/ti/plasttest.png';
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";


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

    const [testCheckboxArr, setCheckboxArr] = React.useState([]);


    return (
      <section class="catalog-section">
        <div class="catalog-section__content">
          
          <CheckboxGroup 
            tags={[
                {value: 'AISI316', text: 'AISI316'}, 
                {value: 'AISI304', text: 'AISI304'},
                {value: 'AISI3', text: 'AISI3'}, 
                {value: 'AISI4', text: 'AISI4'},
            ]}  
            selectedItems={testCheckboxArr}
            onChangeSelected={setCheckboxArr}
          /> 
          {testCheckboxArr}
          
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
                  <Card cardType="plast" cart={cartList} pto={selectedPto} plastPorts="0000" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="H" onAddedToCart={handleItemAddedToCart} />
                  <Card cardType="plast" cart={cartList}  pto={selectedPto} plastPorts="1004" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="H" onAddedToCart={handleItemAddedToCart} />
                  <Card cardType="plast" cart={cartList}  pto={selectedPto} plastPorts="0230" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="H" onAddedToCart={handleItemAddedToCart} />
                  <Card cardType="plast" cart={cartList}  pto={selectedPto} plastPorts="1234" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="H" onAddedToCart={handleItemAddedToCart} />
                  <Card cardType="plast" cart={cartList}  pto={selectedPto} plastPorts="0000" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="L" onAddedToCart={handleItemAddedToCart} />
                  <Card cardType="plast" cart={cartList}  pto={selectedPto} plastPorts="1004" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="L" onAddedToCart={handleItemAddedToCart} />
                  <Card cardType="plast" cart={cartList}  pto={selectedPto} plastPorts="0230" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="L" onAddedToCart={handleItemAddedToCart} />
                  <Card cardType="plast" cart={cartList}  pto={selectedPto} plastPorts="1234" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="L" onAddedToCart={handleItemAddedToCart} />
                  <Card cardType="uplot" cart={cartList}  pto={selectedPto} uplotPosition="center"  selectedRubberMark={selectedRubberMark}  onAddedToCart={handleItemAddedToCart}/>
                  <Card cardType="uplot" cart={cartList}  pto={selectedPto} uplotPosition="start"  selectedRubberMark={selectedRubberMark}  onAddedToCart={handleItemAddedToCart}/>
                  <Card cardType="uplot" cart={cartList}  pto={selectedPto} uplotPosition="end"  selectedRubberMark={selectedRubberMark}  onAddedToCart={handleItemAddedToCart}/>
          </div>
          <h3 className="catalog-section__title">Порты</h3>
        </div>

        <CartDesc cartList={cartList} onDelete={handleItemAddedToCart}/>
      </section>
        
    );
}

export default CatalogDark;