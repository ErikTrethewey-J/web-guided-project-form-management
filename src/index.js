import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

const initialValues = { petName: "", petType: "" }

function SimpleForm() {
  const [pets, setPets] = useState(petsList)
  const [formValues, setFromValues] = useState(initialValues)
  const change = (evt) => {
    const { name, value } = evt.target;
    setFromValues({ ...formValues, [name]: value })
  };
  const submit = (evt) => {
    evt.preventDefault();
    const newPet = {
      petName: formValues.petName.trim(),
      petType: formValues.petType.trim()
    }
    setPets(pets.concat(newPet))
    setFromValues(initialValues)
  };

  return <div className="container">
    <h1>Simple Form App</h1>
    {pets.map((pet, idx) => {
      return <div key={idx}>
        {pet.petName} is a {pet.petType}
      </div>
    })}
    <form onSubmit={submit}>
      <input placeholder="Pet Name" name="petName" value={formValues.petName} type="text" onChange={change} />
      <input placeholder="Pet Type" name="petType" value={formValues.petType} type="text" onChange={change} />
      <button>
        Submit
      </button>
    </form>
  </div>
}

render(
  <>
    {/* <SimpleForm /> */}
    <App />
  </>
  , document.querySelector('#root')
)
