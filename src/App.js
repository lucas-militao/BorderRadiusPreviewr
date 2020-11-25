import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import './App.css';

export default function App() {

  const [ topLeftRadiusValue, setTopLeftRadiusValue ] = useState('');
  const [ topRightRadiusValue, setTopRightRadiusValue ]  = useState('');
  const [ bottomLeftRadiusValue, setBottomLeftRadiusValue ] = useState('');
  const [ bottomRightRadiusValue, setBottomRightRadiusValue ] = useState('');
  const [ divRectangle, setDivRectangle ] = useState({});

  function handleBorderRadius() {
    setTopLeftRadiusValue('');
    setTopRightRadiusValue('');
    setBottomLeftRadiusValue('');
    setBottomRightRadiusValue('');
  }

  return (
    <>
      <div id='rectangle'>
      </div>

      <Form 
        type="submit"
        onSubmit={(e) => {
          e.preventDefault();
          handleBorderRadius();
        }}
        style={divRectangle}>
        <Form.Label >Raio desejado</Form.Label>
        <Form.Control type="text" value={topLeftRadiusValue} onChange={ event => setTopLeftRadiusValue(event.target.value) }/>
        <Form.Control type="text" value={topRightRadiusValue} onChange={ event => setTopRightRadiusValue(event.target.value) }/>
        <Form.Control type="text" value={bottomLeftRadiusValue} onChange={ event => setBottomLeftRadiusValue(event.target.value) }/>
        <Form.Control type="text" value={bottomRightRadiusValue} onChange={ event => setBottomRightRadiusValue(event.target.value) }/>
        <Button type="submit">Mudar</Button>
      </Form>

      <div className="sizeInputs">
        <label>Rectangle`s Size</label>
        <input type="text" id="height"/>
        <input type="text" id="width"/>
      </div>
    </>
  )
}