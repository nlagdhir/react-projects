import { useState } from 'react';

const ShortCircuitOverview = () => {

  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');

  return <>
    <h4>Falsy OR : {text || 'some text'}</h4>
    <h4>Falsy && : {text && 'some text'}</h4>
    <h4>Truthy OR : {name || 'some text'}</h4>
    <h4>Truthy && : {name && 'some text'}</h4>
  </>
};
export default ShortCircuitOverview;
