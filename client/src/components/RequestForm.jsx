import { useContext, useState, useEffect } from 'react';
import { locationContext } from '../providers/LocationProvider';
import axios from 'axios';

export default function RequestForm(props) {

  

  useEffect(() => {
    getUserData(1);
  }, []);

  const getUserData = (userId) => {
    axios.get(`http://localhost:3001/api/users/${userId}`)
    .then((response) => {
      props.setRequest({...props.request, user_id: response.data[0].id, users_email: response.data[0].email})
    });
  }

  const setSize = (e) => {
    const drivewaySize = Number(e.target.value);
    const priceInCents = drivewaySize * 2000;
    props.setRequest({...props.request, size: drivewaySize, price: priceInCents})
    ;
  }

  const setNote = (e) => {
    props.setRequest({...props.request, note: e.target.value});
  }

  const getPrice = () => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    const priceInCents = props.request.price;
    const formattedPrice = formatter.format(priceInCents/100);
    return formattedPrice
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", props.request);
    props.setIsConfirmed(true)
  }

  return (
    <>
      <form className='form'>
        <div className="mb-3">
          <label for="inputEmail" className="form-label">Email</label>
          <input readOnly type="email" className="form-control" id="inputEmail" value={props.request.users_email || ''}></input>
        </div>
        <div className="mb-3">
          <label for="inputAddress" className="form-label" >Address</label>
          <input readOnly type="text" className="form-control" id="inputAddress" value={props.location.address || ''}></input>
        </div>
        <div className="mb-3">
          <label for="inputSize" className="form-label">Size</label>
          <select className="form-select" aria-label="Number of cars that fit in driveway" id="inputSize" onChange={setSize}>
            <option value="1" selected>1 car</option>
            <option value="2">2 cars</option>
            <option value="3">3 cars</option>
            <option value="4">4 cars</option>
            <option value="5">5 cars</option>
            <option value="6">6 cars</option>
            <option value="7">7 cars</option>
            <option value="8">8 cars</option>
          </select>
          <div id="sizeHelp" className="form-text">Please select the approximate size if your driveway based on how many cars can be parked there.</div>
        </div>
        <div className="mb-3">
          <label for="inputNote" className="form-label">Note</label>
          <textarea className="form-control rounded-0" id="inputText" rows="3" onChange={setNote}></textarea>
          <div id="noteHelp" className="form-text">Leave a note for your shoveller.</div>
        </div>
        <div className="mb-3 row">
          <div className="col-auto">
            <label for="inputPrice" className="col-sm-2 col-form-label">Price</label>
          </div>
          <div className="col-auto">
            <input readOnly type="text" className="form-control-plaintext" id="inputPrice" value={getPrice()}></input>
          </div>
          
        </div>
      </form>
    </>
  );
}

//created_at, started_at, completed_at, users_email, total_cents, size, note, user_id, snow_remover_id, address_id