import React from 'react'
import VoucherForm from './VoucherForm'

export const Voucher = () => {
  return (
    <div>
      <div className='h-fit md:mt-36 mt-14 mb-5 text-center'>
        <h1 className='text-[#564757] mb-10 font-serif md:text-3xl text-xl font-bold'>REGALALE A ALGUIEN QUERIDO UNA TARJETA VOUCHER</h1>
        <p className='max-w-lg mx-auto'>
          Puedes reservar un turno del servicio que quieras para regalarselo a la persona que quieras. Cada Voucher se lo puedes dar a una persona, ponerlo a su nombre y dejar que disfrute el servicio que selecciones 
        </p>
      </div>
      <VoucherForm></VoucherForm>
    </div>
  )
}
