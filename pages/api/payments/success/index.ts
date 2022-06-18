import { PrismaClient } from '@prisma/client'; 
import type { NextApiRequest, NextApiResponse } from 'next'; 

type Data = {
  message: string,
  order: {}
}

const prisma = new PrismaClient();

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
    if(req.method === "POST"){
        // paypal.payment.execute(paymentID, execute_payment_json, function (error: any, payment: any) {
        //     if (error) {
        //         console.log(error.response);
        //         throw error;
        //     } else {
        //         console.log(JSON.stringify(payment));
        //         res.send({ message: "Success" });
        //     }
        // });
        
        /*
        model Orders {
          orderId Int @default(autoincrement()) @id
          transcationID Int @unique 
          state String 
          description String
          start_date DateTime
          payerID Int @unique
          payer User @relation(fields: [payerID], references: [id])
          autoRenewDate DateTime
          currency String
          amount Int
          renew Boolean
        }
        */

        const { 
          orderId, 
          transcationID, 
          state, 
          description, 
          start_date, 
          email, 
          first_name, 
          last_name, 
          payerID, 
          autoRenewDate, 
          currency, 
          amount, 
          renew 
        } = req.body;

        const order = await prisma.orders.create({
            data:{
              orderId,
              transcationID,
              state,
              description,
              start_date,
              email,
              first_name,
              last_name,
              payerID,
              autoRenewDate,
              currency,
              amount,
              renew
            }
        })

        console.log(order);

        res.json({ message: "Saved Order to Database...", order: order })
    }else{
        return "wrong method, method for this process is POST"
    }
}
