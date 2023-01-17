import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const PageNotFound = () => {
  return (
    <>
        <Head>
            <title>Page Not Found</title>
        </Head>
        <section className='flex_center flex-col text-center pt-[100px] dark:text-white text-dark'>
            <h1 className='text-[30px] sm:text-[50px] font-bold'>Page Not Found!</h1>
            <Link className='btn mt-[20px]' href="/">Back to Home</Link>
        </section>
    </>
  )
}

export default PageNotFound