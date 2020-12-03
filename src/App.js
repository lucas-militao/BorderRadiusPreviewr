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

  const [ css, setCss ] = useState(`
    .rectangle {
      border-radius: ${topLeftRadiusValue} ${topRightRadiusValue} ${bottomLeftRadiusValue} ${bottomRightRadiusValue};
      height: ${height};
      width: ${width};
    }
  `);

  const [ divRectangle, setDivRectangle ] = useState({});

  function handleBorderRadius() {
    setDivRectangle({
      height: `${height}`,
      width: `${width}`,
      borderRadius: `${topLeftRadiusValue} ${topRightRadiusValue} ${bottomLeftRadiusValue} ${bottomRightRadiusValue}`
    })

    if(height == '' || height == '0px') {
      setCss(`
        .rectangle {
          border-radius: ${topLeftRadiusValue} ${topRightRadiusValue} ${bottomLeftRadiusValue} ${bottomRightRadiusValue};
        }
      `)
    } else {
      setCss(`
        .rectangle {
          border-radius: ${topLeftRadiusValue} ${topRightRadiusValue} ${bottomLeftRadiusValue} ${bottomRightRadiusValue};
          height: ${height};
          width: ${width};
        }
      `)
    }
  }

  function handleSize() {
    setDivRectangle({
      height: `${height}`,
      width: `${width}`,
      borderRadius: `${topLeftRadiusValue} ${topRightRadiusValue} ${bottomLeftRadiusValue} ${bottomRightRadiusValue}`
    })

    if(topLeftRadiusValue == '' && topLeftRadiusValue == '0px') {
      setCss(`
        .rectangle {
          height: ${height};
          width: ${width};
        }
      `)
    } else {
      setCss(`
        .rectangle {
          border-radius: ${topLeftRadiusValue} ${topRightRadiusValue} ${bottomLeftRadiusValue} ${bottomRightRadiusValue};
          height: ${height};
          width: ${width};
        }
      `)
    }
  }

  function handleCopyCss() {
    var copyText = document.getElementById("cssText");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
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
            <Form.Control id="topLeftRadius" type="text" value={topLeftRadiusValue} onChange={ event => setTopLeftRadiusValue(event.target.value) } placeholder='0px'/>
            <Form.Control id="topRightRadius" type="text" value={topRightRadiusValue} onChange={ event => setTopRightRadiusValue(event.target.value) } placeholder='0px'/>
            <Form.Control id="bottomLeftRadius" type="text" value={bottomLeftRadiusValue} onChange={ event => setBottomLeftRadiusValue(event.target.value) } placeholder='0px'/>
            <Form.Control id="bottomRightRadius" type="text" value={bottomRightRadiusValue} onChange={ event => setBottomRightRadiusValue(event.target.value) } placeholder='0px'/>
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
            <label className="sizeLabels">Altura</label>
            <Form.Control type="text" value={height} onChange={ event => setHeight(event.target.value) } placeholder="0px"/>
            <label className="sizeLabels">Largura</label>
            <Form.Control type="text" value={width} onChange={ event => setWidth(event.target.value) } placeholder="0px"/>
          </div>

          <Button type="submit">Mudar Tamanho</Button>
        </Form>

        <div className="cssContainer">
          <textarea id="cssText" cols="30" rows="10" value={css}/>
          <button onClick={handleCopyCss}>Copiar</button>
        </div>
      </div>
    </>
  )
}