import React from 'react'
import PricingCard from '../../components/PricingCard';

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

const subscriptions = ({ orders }: any) => {
  return (
    <div className="relative container flex flex-col justify-center items-center md:flex-row">


      {
        orders ? <PricingCard /> : orders.map((order) => ( 
          <h1 key={order.key}>{order.name}</h1>
        )) 
      }
            
    </div>
  )
}

export default subscriptions;
