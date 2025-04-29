import React from 'react'
import { Helmet } from 'react-helmet-async';
import SeoHelmet from '../../components/Helmet/SeoHelmet'
import LogIN from '../../components/LogIn/LogIN'


const Log = () => {
  return (
    <>
      <SeoHelmet 
      title="Login-Big Byte World"
      description="Need a trusted digital marketing agency in Kurukshetra? Big Byte World offers cost-effective solutions to help you reach your audience and goals!"
      keywords="Login-Big Byte World"
    />
      <LogIN/>
      
    </>
  )
}

export default Log