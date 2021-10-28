import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className='container contact-img'>
            <h2 className='text-center fw-bold fs-1 my-5'>Contact US</h2>
            <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-4">
                    <label for="validationCustom01" className="form-label text-danger fw-bold">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" value="istiaque" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" className="form-label text-danger  fw-bold">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" value="ahmed" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustomUsername" className="form-label text-danger  fw-bold">Username</label>
                    <div className="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback text-danger  fw-bold">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationCustom03" className="form-label  fw-bold text-danger">City</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                    <div className="invalid-feedback text-danger">
                        Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-3">
                    <label for="validationCustom04" className="form-label text-danger  fw-bold">State</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div className="col-md-3">
                    <label for="validationCustom05" className="form-label text-danger  fw-bold">Zip</label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
                <div className="col-12">
                    <div class="form-check">
                        <input className="form-check-input text-danger" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label text-danger  fw-bold" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback text-danger  fw-bold">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-danger" type="submit">Submit form</button>
                </div>
            </form>

        </div>
    );
};
export default Contact;