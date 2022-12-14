import React from "react";
import { Link } from "react-router-dom";

import FormSearch from "../FormSearch/FormSearch";
import Card from "../Card/Card";
import CartDesc from "../CartDesc/CartDesc";

import './CatalogDarkSection.css';

import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import ButtonWithRadioGroup from "../ButtonWithRadioGroup/ButtonWithRadioGroup";
import CardPlita from "../CardPlita/CardPlita";
import RadioGroup from "../RadioGroup/RadioGroup";

import { du, portType } from "../../utils/constants";

function CatalogDark() {
    
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
      setSelectedDuList(du[selectedPto].map(function(element) {
       return {
        value: `DU${element} `,
        text: `ДУ${element} `
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
          
          <ButtonWithRadioGroup 
                selected={selectedPto}
                onChangeSelected={setSelectedPto}
                tags={[
                    {value: '025', text: 'ТИ025'}, 
                    {value: '077', text: 'ТИ077'},
                    {value: '13', text: 'ТИ13'},
                    {value: '18', text: 'ТИ18'},
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
                title="Тип присоединения"
          />
            
          <div class="catalog-section__grid"> 
                <CardPlita cardType="stanina" cart={cartList} pto={selectedPto} config="1234" dn="40" type="shtu" onAddedToCart={handleItemAddedToCart} />
                <CardPlita cardType="stanina" cart={cartList} pto={selectedPto} config="1200" dn="40" type="shtu" onAddedToCart={handleItemAddedToCart} />

                <CardPlita cardType="plita" cart={cartList} pto={selectedPto} config="1200" dn="40" type="shtu" onAddedToCart={handleItemAddedToCart} />
                <CardPlita cardType="plita" cart={cartList} pto={selectedPto} config="0034" dn="40" type="shtu" onAddedToCart={handleItemAddedToCart} />
                <CardPlita cardType="plita" cart={cartList} pto={selectedPto} config="0000" dn="40" type="shtu" onAddedToCart={handleItemAddedToCart} />
          </div>
        </div>

        <CartDesc cartList={cartList} onDelete={handleItemAddedToCart} />
      </section>
        
    );
}

export default CatalogDark;