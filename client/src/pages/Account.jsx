import { Link } from 'react-router-dom';
import axios from 'axios';

const Account = () => {

  return (
    <section>
      <div class="container">
        <div className="col-lg-4 py-3">
          <div className="mb-4">
            <div className="card-body text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6.webp" alt="avatar" className="rounded-circle img-fluid" style={{width: '150px'}}></img>
              <h5 className="my-3">Larry</h5>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Full Name</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Larry Lighthouse</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Email</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">larry_lighthouse@gmail.com</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Phone</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Address</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center my-4">
                    <Link to='../Status'>
                      <button type="button" className="btn btn-primary">Active Request</button>
                    </Link>
                    <Link to='PastRequests'>
                      <button type="button" className="btn btn-outline-primary ms-1">Request History</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}

export default Account;