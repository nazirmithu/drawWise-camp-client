/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-purple-100 text-red-600'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
               <img src="https://i.ibb.co/nfvCjGf/Code-Pen-404-Page.gif" alt="" />
                <div className='max-w-md text-center'>
                    <Link
                        to='/'
                        className='btn btn-primary'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage