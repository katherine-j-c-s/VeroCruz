import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { InfoServicios } from './InfoServicios';
import { FloatingElement } from '../Efectos/FloatingElement/FloatingElement';

import flecha from "../../assets/link.png"
import giftLeftTop from "../../assets/Voucher/gift11.png";
import giftLeftButtom from "../../assets/Voucher/gift12.png";
import giftRightTop from "../../assets/Voucher/gift21.png";
import giftRightButtom from "../../assets/Voucher/gift22.png";

export default function VoucherForm() {
    const [preferenceId,setPreferenceId] = useState(null)
    const [formData, setFormData] = useState({
        para: '',
        de: '',
        servicio: '',
        email: '',
    });

    const [errors, setErrors] = useState({});
    const [monto, setMonto] = useState(0);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
        if (name === 'servicio') {
          const selectedService = InfoServicios.find(s => s.nombre === value);
          setMonto(selectedService ? selectedService.costo : 0);
        }
    };
    const validate = () => {
        let tempErrors = {};
        tempErrors.para = formData.para ? "" : "Este campo es requerido";
        tempErrors.de = formData.de ? "" : "Este campo es requerido";
        tempErrors.servicio = formData.servicio ? "" : "Debe seleccionar un servicio";
        tempErrors.email = formData.email ? "" : "Este campo es requerido";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    initMercadoPago('TEST-5024121c-fb58-4af1-a124-06216c3155d9',{
        locale: "es-AR"
    });

    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:3000/create_preference",{
                title: formData.servicio,
                quantity: 1,
                price: monto
            });

            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
    }

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            handleBuy()
            navigate('/Voucher', { state: { success: true } });
        }
    };

    return (
        <div className="w-full mb-20">
            <div className="bg-white relative max-w-full md:max-w-4xl mx-auto md:shadow-lg md:rounded-lg md:p-8">
                <img src={giftLeftTop} alt="Gift" className="absolute md:w-44 md:top-0 top-32 left-0" />
                <img src={giftLeftButtom} alt="Gift" className="absolute md:w-44 top-64 md:top- md:bottom-0 left-0" />
                <img src={giftRightTop} alt="Gift" className="absolute md:w-44 md:top-0 top-96 md:right-0 md:scale-x-[1] scale-x-[-1]" />
                <img src={giftRightButtom} alt="Gift" className="absolute md:w-44 bottom-0 md:right-0 md:scale-x-[1] scale-x-[-1]" />
                
                <div className='md:w-fit w-full relative border md:py-4 md:px-24 md:mx-auto border-[#F6E2EA] md:bg-white'>
                    <div className='relative my-8 md:my-10'>
                        <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-2/2 h-0.5 bg-gradient-to-r from-[#EEB4CB] via-[#F6E2EA] via-[#FDF4F8] via-[#F6E2EA] to-[#EEB4CB] w-36 md:w-80'/>
                        <h2 className="md:text-4xl text-xl font-serif font-bold text-center md:my-auto">Reserva tu Vouchar</h2>
                        <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-0/2 h-0.5 bg-gradient-to-r from-[#EEB4CB] via-[#F6E2EA] via-[#FDF4F8] via-[#F6E2EA] to-[#EEB4CB] w-36 md:w-80'/>
                    </div>
                    <p className="text-center md:text-base text-xs text-gray-600 mb-6">agrege los siguientes datos</p>

                    <form onSubmit={handleSubmit} className="md:flex relative md:justify-around w-full">
                        <div className='space-y-8 md:w-fit w-3/5 relative md:left-0 left-24 md:mr-10'>
                            <div>
                                <label className="block md:text-sm text-xs font-medium text-gray-700">Para:</label>
                                <input
                                type="text"
                                name="para"
                                value={formData.para}
                                onChange={handleChange}
                                className={` block w-full border-b-2 outline-none hover:border-[#EEB4CB] cursor-pointer transition-all duration-300 ease-in-out ${errors.para ? 'border-red-500' : 'border-[#f2dde5] '}`}
                                />
                                {errors.para && <p className="mt-2 md:text-sm text-xs text-red-600">{errors.para}</p>}
                            </div>
                            <div>
                                <label className="block md:text-sm text-xs font-medium text-gray-700">De:</label>
                                <input
                                type="text"
                                name="de"
                                value={formData.de}
                                onChange={handleChange}
                                className={` block w-full border-b-2 outline-none hover:border-[#EEB4CB] cursor-pointer transition-all duration-300 ease-in-out ${errors.de ? 'border-red-500' : 'border-[#f2dde5] '}`}
                                />
                                {errors.de && <p className="mt-2 md:text-sm text-xs text-red-600">{errors.de}</p>}
                            </div>
                            <div>
                                <label className="block md:text-sm text-xs font-medium text-gray-700">Servicio:</label>
                                <select
                                name="servicio"
                                value={formData.servicio}
                                onChange={handleChange}
                                className={` block w-full border-b-2 outline-none hover:border-[#EEB4CB] cursor-pointer transition-all duration-300 ease-in-out ${errors.servicio ? 'border-red-500' : 'border-[#f2dde5] '}`}
                                >
                                <option value=""></option>
                                {InfoServicios.map((servicio, index) => (
                                    <option key={index} value={servicio.nombre}>{servicio.nombre}</option>
                                ))}
                                </select>
                                {errors.servicio && <p className="mt-2 md:text-sm text-xs text-red-600">{errors.servicio}</p>}
                            </div>  
                            <div>
                                <label className="block md:text-sm text-xs font-medium text-gray-700">Monto a Abonar:</label>
                                <input
                                type="text"
                                value={`$${monto}`}
                                readOnly
                                className={` block w-full border-b-2 outline-none hover:border-[#EEB4CB] cursor-pointer transition-all duration-300 ease-in-out ${errors.servicio ? 'border-red-500' : 'border-[#f2dde5] '}`}
                                />
                            </div>
                        </div>
                        <div className='md:w-fit w-3/5 relative md:left-0 left-24 md:mt-0 mt-6'>
                            <p className='max-w-52 md:text-sm text-xs'>te vamos a enviar la tarjeta Voucher por mail una ves hayas abonado el monto del servicio</p>
                            <p className='max-w-52 my-5 md:text-sm text-xs'>ingresa el mail al que quieres que te mandemos la tarjeta</p>
                            <div className='md:mt-10'>
                                <label className="block md:text-sm text-xs font-medium text-gray-700">Email:</label>
                                <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={` block w-full border-b-2 outline-none hover:border-[#EEB4CB] cursor-pointer transition-all duration-300 ease-in-out ${errors.email ? 'border-red-500' : 'border-[#f2dde5] '}`}
                                />
                                {errors.email && <p className="mt-2 md:text-sm text-xs text-red-600">{errors.email}</p>}
                            </div>
                            
                            {preferenceId ?
                                <Wallet 
                                    initialization={
                                        { preferenceId: preferenceId }
                                    } 
                                    customization={
                                        { texts: 
                                            {valueProp: 'smart_option'}
                                        }
                                    } 
                                />
                            :
                                <>
                                    <FloatingElement>
                                        <button
                                            type="submit"
                                            className='flex font-monos md:text-base text-sm bg-gradient-to-r from-[#EEB4CB] via-[#FDF4F8] to-[#EEB4CB] w-fit px-5 shadow-md py-3 space-x-3 my-10'
                                        >
                                            <p className='text-[#564757] uppercase'>pagar</p>
                                            <img className='w-3 h-4 my-auto' src={flecha} alt="flechaLink" />
                                        </button>
                                    </FloatingElement>
                                </>
                            }
                            
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
