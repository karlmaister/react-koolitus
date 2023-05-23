import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function CheckPayment() {

    // payment?order_reference=4069953.1597831715&payment_reference=91dcd3b1bb6b3cca0252c62ad470461e8f70233a7336ea63b743505141a2cc38
    // payment_state
    // : 
    // "settled"


    const [searchParams] = useSearchParams();
    const paymentReference = searchParams.get("payment_reference");
    const [message, setMessage] = useState("");


    useEffect(() => {
        fetch("https://igw-demo.every-pay.com/api/v4/payments/"
            + paymentReference
            + "?api_username=e36eb40f5ec87fa2",
            {
                headers: {
                    "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
                },
            }
        )
            .then(res => res.json())
            .then((json) => {
                switch (json.payment_state) {
                    case "settled":
                        setMessage("Edukalt makstud")
                        return;
                    case "failed":
                        setMessage("Makse ebaõnnestus")
                        return;
                    case "voided":
                        setMessage("Makse ebaõnnestus")
                        return;
                    case "abandoned":
                        setMessage("Makse ebaõnnestus")
                        return;
                    default:
                        setMessage("Viga")
                        return;
                }
            });
        }, [paymentReference]);


        return (
            <div>
{message}
            </div>
        )
    }

export default CheckPayment
