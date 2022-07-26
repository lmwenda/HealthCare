import React from 'react'
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import PricingCard from '../../components/Cards/PricingCard';

type Orders = {
  orderId: number;
  transcationID: number;
  state: string;
  description: string;
  start_date: Date;
  email: string;
  first_name: string;
  last_name: string;
  payerID: number;
  autoRenewDate: Date;
  currency: string;
  amount: number;
  renew: boolean;
}

export const getStaticProps = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();

  return{
    props: {
      orders: {

      }
    }
  }
}

const index: NextPage = ({ orders }: any) => {
  return (
    <motion.div 
    animate={{ x: [  -75, 0 ], 
    opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} 
    transition={{ ease: 'easeIn', duration: 0.5 }} 
    className="mt-5 flex mx-[1vw] flex-col justify-center text-center md:mt-20">
       <h1 className="text-4xl text-bold">HealthCare <span className="text-blue-500">Pricing</span></h1>
       <p className="text-gray-500 text-2xl pt-5">Start improving your healthcare by x100 almost instantly by purchasing these amazing deals...</p>
       
      <div className="flex mx-5 justify-center items-center space-y-10 flex-col md:flex-row md:mt-14 md:space-x-10">
        {
          orders ? <PricingCard /> : orders.map((order: Orders, key: React.Key) => ( 
            <h1 key={key}>{order.transcationID}</h1>
          )) 
        }
      </div>

    </motion.div>
  )
}

export default index;
