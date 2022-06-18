import Image from "next/image";
import React, { useEffect } from "react";
import paypal from "paypal-rest-sdk"; 
import image1 from "../../public/5290058.png";
import { useRouter } from "next/router";
import uniqid from "uniqid";
import {BASE_URL} from "../../utils/exportedDefinitions";

paypal.configure({
    'mode': 'sandbox',
    'client_id': 'AXzFDfX3tv5Fri3OPE_wrGSRMctH4ue0Dzy35AgC8u5Syid9305WQ9eQh_m9lhn9rXPLkRjwE7kpS8eA',
    'client_secret': 'EJfOp3RVkQljblmX_ww9rxL8WiAvyEl5WT9S_kdEAJ6qAlmrlG_ziHPWQcssSwFdlMIvMV9aF_DLxg20',
})

const Success = () => {
  const router = useRouter();

  useEffect(() => {
    const localToken: any = localStorage.getItem("htc-token");
    const { token } =  router.query;
    const paymentToken: any = token;

    paypal.billingAgreement.execute(paymentToken, {}, async function (error: any, billingAgreement: any) {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.log("Billing Agreement Execute Response");
                console.log(billingAgreement.payment_definitions);
        
                const response = await fetch(BASE_URL + "api/payments/success", {
                  method: "POST",
                  body:
                    JSON.stringify({
                      orderId: Number(uniqid("opypl-")),
                      transcationID: Number(billingAgreement.id),
                      state: billingAgreement.state,
                      description: billingAgreement.description,
                      start_date: billingAgreement.start_date,
                      email: billingAgreement.payer.payer_info.email,
                      first_name: billingAgreement.payer.payer_info.first_name,
                      last_name: billingAgreement.payer.payer_info.last_name,
                      payerID: Number(localToken),
                      autoRenewDate: billingAgreement.agreement_details.next_billing_date,
                      currency: billingAgreement.plan.currency_code,
                      amount: billingAgreement.plan.payment_definitions[0].amount.value,
                      renew: true,
                    }),
                });


              const data = await response.json();

              console.log(data);
           }
        })
    });

  return(
    <div className="relative container flex flex-col justify-center space-y-5 items-center">
      <Image src={image1} height={100} width={100} alt="" /> 
      <h1 className="text-4xl text-gray-500">Payment Confirmed</h1>
      <p className="text-lg text-gray-500">Your Subscription Plan was successfully activated...</p>
    </div>
  );
}

export default Success;
