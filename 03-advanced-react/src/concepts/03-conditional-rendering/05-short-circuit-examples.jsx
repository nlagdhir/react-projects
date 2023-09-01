import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/* falsy OR */}
      {text || '1. default text '}   
      {/* truthy OR */}
      <p></p>
      {name || '2. default name'} 

      {/* falsy && */}
      {text && '3. default text'}

      {/* truthy && */}
      {name && <div>
          <p>4. Some text</p>
          <p>{name}</p>
        </div>}


      {user && <SomeComponent user={user} />}

      <h2 style={{ marginTop: '1rem 0' }}>Ternary Operator</h2>
      <button className='btn'>{isEditing? 'Edit' : 'Add'}</button>

      {user ? <div>
        <h2>Hello {user.name}</h2>
      </div> : <div>
        <h2>Please login!</h2>
        </div>}
    </div>
  )
};

const SomeComponent = ({user}) => {
  return <>
    <p>Some content return </p>
    <p>Hi {user.name}</p> 
  </>
}

export default ShortCircuitExamples;
