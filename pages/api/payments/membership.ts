import type { NextApiRequest, NextApiResponse } from 'next'
import paypal from "paypal-rest-sdk";
import url from "url";
import NextCors from 'nextjs-cors';
import {BASE_URL} from '../../../utils/exportedDefinitions';

paypal.configure({
    'mode': 'sandbox',
    'client_id': 'AXzFDfX3tv5Fri3OPE_wrGSRMctH4ue0Dzy35AgC8u5Syid9305WQ9eQh_m9lhn9rXPLkRjwE7kpS8eA',
    'client_secret': 'EJfOp3RVkQljblmX_ww9rxL8WiAvyEl5WT9S_kdEAJ6qAlmrlG_ziHPWQcssSwFdlMIvMV9aF_DLxg20',
})

type Data = {
  name: string
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
    
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    if(req.method === "POST"){
        const isoDate = new Date();
        isoDate.setSeconds(isoDate.getSeconds() + 4);
        isoDate.toISOString().slice(0, 19) + 'Z';

        const billingPlanAttributes = {
            "description": "Create Plan for Membership",
            "merchant_preferences": {
                "auto_bill_amount": "yes",
                "cancel_url": `${BASE_URL}api/payments/cancel`,
                "initial_fail_amount_action": "continue",
                "max_fail_attempts": "1",
                "return_url": `${BASE_URL}api/payments/success`,
                "setup_fee": {
                    "currency": "GBP",
                    "value": "0"
                }
            },
            "name": "Healthcare Subscription",
            "payment_definitions": [
                {
                    "amount": {
                        "currency": "GBP", 
                        "value": "4.16" 
                },
                    "cycles": "0",
                    "frequency": "MONTH",
                    "frequency_interval": "1",
                    "name": "Membership Plan",
                    "type": "REGULAR"
                },
            ],
            "type": "INFINITE"
        };

        // const billingPlanAttributes = {
        //     "intent": "sale",
        //     "payer": {
        //         "payment_method": "paypal"
        //     },
        //     "merchant_preferences": {
        //         "auto_bill_amount": "yes",
        //         "cancel_url": "http://www.cancel.com",
        //         "initial_fail_amount_action": "continue",
        //         "max_fail_attempts": "1",
        //         "return_url": "http://www.success.com",
        //         "setup_fee": {
        //             "currency": "GBP",
        //             "value": "4.16"
        //         }
        //     },
        //     "cycles": "0",
        //     "frequency": "MONTH",
        //     "frequency_interval": "1",
        //     "name": "Membership",
        //     "type": "REGULAR",
        //     "redirect_urls": {
        //         "return_url": "http://localhost:3000/api/payments/success",
        //         "cancel_url": "http://localhost:3000/api/payments/cancel"
        //     },
        //     "transactions": [{
        //         "item_list": {
        //             "items": [
        //                 {
        //                     "name": "Membership",
        //                     "sku": "item",
        //                     "price": "4.16",
        //                     "currency": "GBP",
        //                     "quantity": 1
        //                 }
        //             ]
        //         },
        //         "amount": {
        //             "currency": "GBP",
        //             "total": "4.16"
        //         },
        //         "description": "This is the payment description."
        //     }]
        // }

        const billingPlanUpdateAttributes = [
            {
                "op": "replace",
                "path": "/",
                "value": {
                    "state": "ACTIVE"
                }
            }
        ];

        const billingAgreementAttributes = {
            "name": "Healthcare Membership Agreement",
            "description": "Agreement for Membership Plan",
            "start_date": isoDate,
            "plan": {
                "id": "P-0NJ10521L3680291SOAQIVTQ"
            },
            "payer": {
                "payment_method": "paypal"
            },
            "shipping_address": {
                "line1": "StayBr111idge Suites",
                "line2": "Cro12ok Street",
                "city": "San Jose",
                "state": "CA",
                "postal_code": "95112",
                "country_code": "US"
            }
        };
    
        // paypal.billingPlan.create(create_payment_json,  (error: any, payment: any) => {
        //     if (error) {
        //         throw error;
        //     } else {
        //         console.log("Create Payment Response");
        //         console.log(payment);

        //         for(let i = 0;i < payment.links?.length; i++){
        //             if(payment.links[i].rel === 'approval_url'){
        //                 res.status(200);
        //                 res.json(payment.links[i].href);
        //             }
        //         }
        //     }
        // })
        // Create the billing plan
        paypal.billingPlan.create(billingPlanAttributes, function (error: any, billingPlan: any) {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.log("Create Billing Plan Response");
                console.log(billingPlan);

                // Activate the plan by changing status to Active
                paypal.billingPlan.update(billingPlan.id, billingPlanUpdateAttributes, function (error: any, response: any) {
                    if (error) {
                        console.log(error);
                        throw error;
                    } else {
                        console.log("Billing Plan state changed to " + billingPlan.state);
                        billingAgreementAttributes.plan.id = billingPlan.id;

                        // Use activated billing plan to create agreement
                        paypal.billingAgreement.create(billingAgreementAttributes, function (error: any, billingAgreement: any) {
                            if (error) {
                                console.log(error);
                                throw error;
                            } else {
                                console.log("Create Billing Agreement Response");
                                //console.log(billingAgreement);
                                for (var index = 0; index < billingAgreement.links.length; index++) {
                                    if (billingAgreement.links[index].rel === 'approval_url') {
                                        var approval_url = billingAgreement.links[index].href;
                                        console.log("For approving subscription via Paypal, first redirect user to");
                                        console.log(approval_url);

                                        console.log("Payment token is");
                                        console.log(url.parse(approval_url, true).query.token);
                                        // See billing_agreements/execute.js to see example for executing agreement 
                                        // after you have payment token

                                        // Sending Approval URL to the frontend

                                        res.json(approval_url)
                                    }
                                }
                            }
                        });
                    }
                })
            }
            
        })
            
    }
    else{
        console.log("this process is supposed to be a post method...")
    }
}
