import React from "react";
import { Link } from "react-router-dom";

import FormSearch from "../FormSearch/FormSearch";
import Card from "../Card/Card";
import CartDesc from "../CartDesc/CartDesc";
import Plits from "../Plits/Plits";
import Ports from "../Ports/Ports";



import './CatalogDarkSection.css';

import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import ButtonWithRadioGroup from "../ButtonWithRadioGroup/ButtonWithRadioGroup";
import CardPlita from "../CardPlita/CardPlita";
import RadioGroup from "../RadioGroup/RadioGroup";

import { du, portType } from "../../utils/constants";
import { ports } from "../../utils/ports";


// -------------------------МАССИВЫ ЧАСТЕЙ ПРАЙСА---------------------------------//
import { pricesWithId , plitsItems, portsItems, stbItems } from "../../utils/constants";


import { sendOrder } from "../../utils/mainApi";



function CatalogDark() {
    const user = JSON.parse(localStorage.getItem('reg'));

    function getAliasById(elemId){
      return pricesWithId.concat(plitsItems).concat(portsItems).filter(item => item.id === elemId)[0]['name'];
  }

    function cartListToAliases() {
      return cartList.map(item => getAliasById(item))
    }

    function handleSendOrder() {
      const jsonString = JSON.stringify(Object.assign({}, cartListToAliases().concat( user.email ? user.email : '')))
      console.log(jsonString);
      sendOrder(jsonString);
      setCartList([]);
    }

    const [cartList, setCartList] = React.useState([]);

    const [selectedPto, setSelectedPto] = React.useState('025');

    const [selectedMetall, setSelectedMetall] = React.useState('AISI304');
    const [selectedRubberMark, setSelectedRubberMark] = React.useState('EPDM');
    const [selectedThinckness, setSelectedThinckness] = React.useState('0.5');

    
    const [selectedDuList, setSelectedDuList] = React.useState(
      du[selectedPto].map((element,i) => `DU${element}`)
    );
  
    const [selectedDu, setSelectedDu] = React.useState(du[selectedPto]);


    React.useEffect(()=> {
      console.log(cartList)
    }, [cartList])

    React.useEffect(()=> {
      setSelectedDuList(du[selectedPto].map(function(element) {
       return {
        value: `DU${element}`,
        text: `ДУ${element}`
       } 
      }));

      setSelectedDu(`DU${du[selectedPto][0]}`)
    },[selectedPto])

    const [selectedPortsType, setSelectedPortsType] = React.useState('undef')

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
          <h3 className="catalog-section__title">Магазин комплектующих</h3>
          {/*
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
          */}
          
          <ButtonWithRadioGroup 
                selected={selectedPto}
                onChangeSelected={setSelectedPto}
                tags={[
                    {value: '025', text: 'ТИ025'}, 
                    {value: '077', text: 'ТИ077'},
                    {value: '13', text: 'ТИ13'},
                    {value: '18', text: 'ТИ18'},
                    {value: '28', text: 'ТИ28'},
                    {value: '45', text: 'ТИ45'},
                    {value: '52', text: 'ТИ52'},
                    {value: '65', text: 'ТИ65'},
                    {value: '82', text: 'ТИ82'}
                ]}  
            />

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
                  <Card cardType="plast" cart={cartList} pto={selectedPto} plastPorts="0000" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="H" onAddedToCart={handleItemAddedToCart} aliases={pricesWithId}/>
                  <Card cardType="plast" cart={cartList}  pto={selectedPto} plastPorts="1004" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="H" onAddedToCart={handleItemAddedToCart} aliases={pricesWithId}/>
                  <Card cardType="plast" cart={cartList}  pto={selectedPto} plastPorts="0230" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="H" onAddedToCart={handleItemAddedToCart} aliases={pricesWithId}/>
                  <Card cardType="plast" cart={cartList}  pto={selectedPto} plastPorts="1234" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="H" onAddedToCart={handleItemAddedToCart} aliases={pricesWithId}/>
                  <Card cardType="plast" cart={cartList}  pto={selectedPto} plastPorts="0000" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="L" onAddedToCart={handleItemAddedToCart} aliases={pricesWithId}/>
                  <Card cardType="plast" cart={cartList}  pto={selectedPto} plastPorts="1004" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="L" onAddedToCart={handleItemAddedToCart} aliases={pricesWithId}/>
                  <Card cardType="plast" cart={cartList}  pto={selectedPto} plastPorts="0230" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="L" onAddedToCart={handleItemAddedToCart} aliases={pricesWithId}/>
                  <Card cardType="plast" cart={cartList}  pto={selectedPto} plastPorts="1234" selectedMetall={selectedMetall} selectedThinckness={selectedThinckness} plastCanals="L" onAddedToCart={handleItemAddedToCart} aliases={pricesWithId}/>
                  <Card cardType="uplot" cart={cartList}  pto={selectedPto} uplotPosition="center"  selectedRubberMark={selectedRubberMark}  onAddedToCart={handleItemAddedToCart} aliases={pricesWithId}/>
                  <Card cardType="uplot" cart={cartList}  pto={selectedPto} uplotPosition="start"  selectedRubberMark={selectedRubberMark}  onAddedToCart={handleItemAddedToCart} aliases={pricesWithId}/>
                  <Card cardType="uplot" cart={cartList}  pto={selectedPto} uplotPosition="end"  selectedRubberMark={selectedRubberMark}  onAddedToCart={handleItemAddedToCart} aliases={pricesWithId}/>
          </div>
       
          <h3 className="catalog-section__title">Порты</h3>
          <div style={{'position': 'sticky', top: 60, backgroundColor: '#2f2f2f'}}>
            <RadioGroup 
                  tags={[
                      {value: 'gost', text: 'Фланец'}, 
                      {value: 'shtu', text: 'Штуцер'}
                  ]}  
                  selected={selectedPortsType}
                  onChangeSelected={setSelectedPortsType}
                  title="Тип присоединения"
            />
          
            {selectedDuList.map(el => ( el['value']))}
            {selectedDu}
            <RadioGroup 
                  tags={selectedDuList}  
                  selected={selectedDu}
                  onChangeSelected={setSelectedDu}
                  selectedPto={selectedPto}
                  title="Тип присоединения"
            />
          </div> 
          
          <div class="catalog-section__grid"> 
            <Plits cart={cartList} selectedDu={selectedDu} selectedPto={selectedPto} onAddedToCart={handleItemAddedToCart} />
          </div>
          <div class="catalog-section__grid">
            <Ports cart={cartList} selectedDu={selectedDu} selectedPto={selectedPto} onAddedToCart={handleItemAddedToCart} />
          </div>
            
          
        </div>

        <CartDesc cartList={cartList} aliases={pricesWithId.concat(plitsItems).concat(portsItems)} onDelete={handleItemAddedToCart} handleSendOrder={handleSendOrder} />
        
      </section>
        
    );
}

export default CatalogDark;