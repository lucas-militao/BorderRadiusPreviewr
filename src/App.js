import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import './App.css';

export default function App() {

  const [ topLeftRadiusValue, setTopLeftRadiusValue ] = useState('');
  const [ topRightRadiusValue, setTopRightRadiusValue ]  = useState('');
  const [ bottomLeftRadiusValue, setBottomLeftRadiusValue ] = useState('');
  const [ bottomRightRadiusValue, setBottomRightRadiusValue ] = useState('');

  const [ height, setHeight ] = useState('');
  const [ width, setWidth ] = useState('');

  const [ divRectangle, setDivRectangle ] = useState({});

  function handleBorderRadius() {
    setDivRectangle({
      height: `${height}`,
      width: `${width}`,
      borderRadius: `${topLeftRadiusValue}px ${topRightRadiusValue}px ${bottomLeftRadiusValue}px ${bottomRightRadiusValue}px`
    })
  }

  function handleSize() {
    setDivRectangle({
      height: `${height}`,
      width: `${width}`,
      borderRadius: `${topLeftRadiusValue}px ${topRightRadiusValue}px ${bottomLeftRadiusValue}px ${bottomRightRadiusValue}px`
    })
  }

  return (
    <>
      <div className="container">
        <div id='rectangle' style={divRectangle}>
        </div>

        <Form 
          className="borderRadiusForm"
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            handleBorderRadius();
          }}
        >
          <Form.Label id="radiusLabel">Raio desejado</Form.Label>

          <div className="borderRadiusInputs">
            <Form.Control id="topLeftRadius" type="text" value={topLeftRadiusValue} onChange={ event => setTopLeftRadiusValue(event.target.value) }/>
            <Form.Control id="topRightRadius" type="text" value={topRightRadiusValue} onChange={ event => setTopRightRadiusValue(event.target.value) }/>
            <Form.Control id="bottomLeftRadius" type="text" value={bottomLeftRadiusValue} onChange={ event => setBottomLeftRadiusValue(event.target.value) }/>
            <Form.Control id="bottomRightRadius" type="text" value={bottomRightRadiusValue} onChange={ event => setBottomRightRadiusValue(event.target.value) }/>
          </div>
          
          <Button type="submit">Mudar Raio</Button>
        </Form>

        <Form className="SizeForm"
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            handleSize();
          }}>

          <Form.Label>Tamanho do Retangulo</Form.Label>

          <div className="sizeInputs">
            <Form.Control type="text" value={height} onChange={ event => setHeight(event.target.value) } placeholder="altura"/>
            <Form.Control type="text" value={width} onChange={ event => setWidth(event.target.value) } placeholder="largura"/>
          </div>

          <Button type="submit">Mudar Tamanho</Button>
        </Form>
      </div>
    </>
  )
}