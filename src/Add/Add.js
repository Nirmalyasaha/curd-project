import axios from 'axios'
import React, { useState } from 'react'
import './Add.css'
import { useNavigate } from 'react-router-dom'

const Add = () => {

  let api_url = "http://localhost:1000/product"

  let navigate=useNavigate()
  

  let [inputdata, inputState] = useState({
    pname: "", company: "", price: "", desc: ""
  })

  let handleChange = (event) => {
    event.persist();
    let { name, value } = event.target;
    inputState({ ...inputdata, [name]: value })
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted data:", inputdata);
    let data =
    {
      pname: inputdata.pname,
      company: inputdata.company,
      price: inputdata.price,
      desc: inputdata.desc

    }
    axios.post(api_url, data)
      .then(res => {
        console.log("axios res :", res);
        alert("product added")
        navigate('/view')

      })
      .catch(err => {
        console.log("error :", err);
        alert("not added");

      })


  }


  return (
    <div>

      <form onSubmit={handleSubmit}>

        <label htmlFor='pname'>PRODUCT NAME</label>
        <input type="text" name='pname' onChange={handleChange} />

        <label htmlFor='company'>COMPANY</label>
        <input type="text" name='company' onChange={handleChange} />

        <label htmlFor='price'>PRICE</label>
        <input type="text" name='price' onChange={handleChange} />

        <label htmlFor='desc'>DESCRIPTION</label>
        <input type="text" name='desc' onChange={handleChange} />

        <input type="submit" value="SUBMIT" />

      </form>
    </div>
  )
}

export default Add