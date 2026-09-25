import React, { useState } from 'react'

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
  })
  const [search, setSearch] = useState('')
  const handleSearch = () => {}

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit form Data', FormData)
  }
  return (
    <div>
      <div>
        <h2>Sear bar with debounce </h2>
        <input name="search" value={search} onChange={handleSearch} />
      </div>

      <h2>Form </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default Form
