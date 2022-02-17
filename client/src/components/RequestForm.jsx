export default function RequestForm(props) {

  //calculate price of service based on driveway size
  const calculatePrice = (size) => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    const priceInCents = size * 2000;
    return formatter.format(priceInCents/100);
  }

  return (
    <>
      <form class='form'>
        <div class="mb-3">
          <label for="inputEmail" class="form-label">Email</label>
          <input readonly type="email" class="form-control" id="inputEmail" value="readonly email"></input>
        </div>
        <div class="mb-3">
          <label for="inputAddress" class="form-label">Address</label>
          <input readonly type="text" class="form-control" id="inputAddress" value="readonly address"></input>
        </div>
        <div class="mb-3">
          <label for="inputSize" class="form-label">Size</label>
          <select class="form-select" aria-label="Number of cars that fit in driveway" id="inputSize">
            <option value="1">1 car</option>
            <option value="2">2 cars</option>
            <option value="3">3 cars</option>
            <option value="4">4 cars</option>
            <option value="5">5 cars</option>
            <option value="6">6 cars</option>
            <option value="7">7 cars</option>
            <option value="8">8 cars</option>
          </select>
          <div id="sizeHelp" class="form-text">Please select the approximate size if your driveway based on how many cars can be parked there.</div>
        </div>
        <div class="mb-3">
          <label for="inputNote" class="form-label">Note</label>
          <textarea class="form-control rounded-0" id="inputText" rows="3"></textarea>
          <div id="noteHelp" class="form-text">Leave a note for your shoveller.</div>
        </div>
        <div class="mb-3 row">
          <div class="col-auto">
            <label for="inputPrice" class="col-sm-2 col-form-label">Price</label>
          </div>
          <div class="col-auto">
            <input readonly type="text" class="form-control-plaintext" id="inputPrice" value={calculatePrice(2)}></input>
          </div>
          
        </div>
        <button type="submit" class="btn btn-primary">Confirm</button>
      </form>
    </>
  );
}

//created_at, started_at, completed_at, users_email, total_cents, size, note, user_id, snow_remover_id, address_id