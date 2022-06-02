import type { NextApiRequest, NextApiResponse } from 'next';
import paypal from "paypal-rest-sdk";

paypal.configure({
    'mode': 'sandbox',
    'client_id': 'AXzFDfX3tv5Fri3OPE_wrGSRMctH4ue0Dzy35AgC8u5Syid9305WQ9eQh_m9lhn9rXPLkRjwE7kpS8eA',
    'client_secret': 'EJfOp3RVkQljblmX_ww9rxL8WiAvyEl5WT9S_kdEAJ6qAlmrlG_ziHPWQcssSwFdlMIvMV9aF_DLxg20',
})

type Data = {
  message: string,
  payload: {}
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
    if(req.method === "GET"){
        const paymentToken: any = req.query.token;

        // paypal.payment.execute(paymentID, execute_payment_json, function (error: any, payment: any) {
        //     if (error) {
        //         console.log(error.response);
        //         throw error;
        //     } else {
        //         console.log(JSON.stringify(payment));
        //         res.send({ message: "Success" });
        //     }
        // });

        paypal.billingAgreement.execute(paymentToken, {}, function (error: any, billingAgreement: any) {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.log("Billing Agreement Execute Response");
                console.log(JSON.stringify(billingAgreement));
                res.json({ message: "Membership Plan successfully Create", payload: billingAgreement })
            }
        });
    }else{
        return "wrong method, method for this process is GET"
    }
}