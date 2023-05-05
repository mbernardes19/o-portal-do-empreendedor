export const makeCreditCardPayment = async ({
    customer,
    address,
    products,
    payment
}) => {
    const response = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({
            paymentMethod: '2',
            customer: {
                ...customer,
                Address: {
                    ...address,
                    CountryName: "Brasil"
                }
            },
            products,
            payment
        })
    })

    return await response.json()
}