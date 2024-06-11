import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Container-fluid>
                <header>
                    <div className='bg-dark d-flex'>
                        

                        <div className='col-8 d-flex justify-content-center'>
                            <Link to='/' className='text-white p-4 text-d-none'>Home</Link>
                            <Link to='/create' className='text-white p-4 text-d-none'>Create</Link>
                        </div>
                    </div>
                </header>
            </Container-fluid>
        </div>
    )
}

export default Header
