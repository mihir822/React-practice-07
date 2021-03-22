import React from "react";

import Heading from "./components/Heading"
import emojipedia from "./emojipedia"
import Card from "./components/Card"


function createObject(contact) {
  return (
    <Card 
      key={contact.id}
      emoji={contact.emoji} 
      name={contact.name} 
      meaning={contact.meaning}
    />
  )
}

function App(props) {
  return (
    <div>
      <Heading />

      <dl className="dictionary">
        {emojipedia.map(createObject)}
      </dl>
    </div>
  );
}

export default App;
