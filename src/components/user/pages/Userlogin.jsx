import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Userlogin = () => {

    // let CardNo = useRef()
    // let Password = useRef()

    // let AddData = () => {

    // }

    return (
        <>
            <div className="row">
                <div className="col-6 bg-primary d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <a href="/">
                        <img src="https://www.eci.gov.in/newimg/eci-logo.svg" alt="logo" />
                    </a>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center ">
                    <div class="card " style={{ width: "50%" }}>
                        <div class="card-header fw-semibold fs-5  text-center">
                            User Login
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <label for="username" className='mb-1 fw-medium'>Card No. : </label>
                                    <input type="text" class="form-control mb-3 border border-dark-subtle" id="username" placeholder="Enter username" required />
                                </div>
                                <div class="form-group">
                                    <label for="password" className='mb-1 fw-medium'>Password : </label>
                                    <input type="password" class="form-control mb-4 border border-dark-subtle" id="password" placeholder="Enter password" required />
                                </div>

                                <div class="form-check d-flex align-items-center justify-content-end my-3">
                                    <input class="form-check-input mx-2 border border-dark-subtle " type="checkbox" value="remember-me" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Remember me
                                    </label>
                                </div>
                                <button type="submit" class="btn btn-primary btn-block" style={{ width: "100%" }}>Login</button>
                                <div class="divider my-2 text-dark text-opacity-50">or</div>
                                <Link to={"/Adminlogin"}><button type="submit" class="btn btn-outline-primary btn-block" style={{ width: "100%" }}>Admin Login</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userlogin