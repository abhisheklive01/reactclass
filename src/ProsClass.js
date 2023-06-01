import React, {useState} from 'react'

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        ""
      )}

      <button onClick={() => setIsActive(!isActive)}>
      {isActive ? "Hide" : "Show" }
          
        </button>
    </section>
  );
}

export default function ProsClass(props) {
  return (
    <div>
    <Panel>
  <p>  Hello </p>
    </Panel>

    <p>First Name : {props.firstName}</p>
   <p>Age : {props.age}</p>
    
    </div>
  )
}
