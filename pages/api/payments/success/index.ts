import paypal from "paypal-rest-sdk"; 
import { PrismaClient } from '@prisma/client'; 
import type { NextApiRequest, NextApiResponse } from 'next'; 
import NextCors from "nextjs-cors";
import { BASE_URL } from "../../../../utils/exportedDefinitions";

paypal.configure({
  'mode': 'live',
  'client_id': 'AXzFDfX3tv5Fri3OPE_wrGSRMctH4ue0Dzy35AgC8u5Syid9305WQ9eQh_m9lhn9rXPLkRjwE7kpS8eA',
  'client_secret': 'EJfOp3RVkQljblmX_ww9rxL8WiAvyEl5WT9S_kdEAJ6qAlmrlG_ziHPWQcssSwFdlMIvMV9aF_DLxg20',
})

type Data = {
  message: string,
  order: {},
  billing: {}
}

const prisma = new PrismaClient();

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {

   await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

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
    

    const paymentToken: any = req.query.token;

    paypal.billingAgreement.execute(paymentToken, {}, async function (error: any, billingAgreement: any) {
      if (error) {
          console.log(error);
          throw error;
      } else {
          console.log("Billing Agreement Execute Response");
          console.log(billingAgreement.payment_definitions);

          // const _order: Orders = await prisma.orders.create({
          //     data: {
          //       transcationID: Number(billingAgreement.id),
          //       state: billingAgreement.state,
          //       description: billingAgreement.description,
          //       start_date: billingAgreement.start_date,
          //       email: billingAgreement.payer.payer_info.email,
          //       first_name: billingAgreement.payer.payer_info.first_name,
          //       last_name: billingAgreement.payer.payer_info.last_name,
          //       payer: billingAgreement.payer.payer_info.payer_id,
          //       autoRenewDate: billingAgreement.agreement_details.next_billing_date,
          //       currency: billingAgreement.plan.currency_code,
          //       amount: Number(billingAgreement.plan.payment_definitions[0].amount.value),
          //       renew: true
          //     }
          // });

          // console.log(_order);
          res.json({ message: "Saved Order to Database...", order: {}, billing: billingAgreement });
          res.redirect(BASE_URL+"/payments/success")
      };
    })
}
