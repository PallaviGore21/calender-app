import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">Account</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    {/* <Link to="/" class="nav-link active">Todo</Link> */}
                    <Link to="/dashboard" class="nav-link" >dashboard</Link>
                    <Link to="/" class="nav-link" >login</Link>
                    <Link to="/register" class="nav-link" >register</Link>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar