export const makePixPayment = async ({
    customer,
    address,
    products
}) => {
    const response = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({
            paymentMethod: '6',
            customer: {
                ...customer,
                Address: {
                    ...address,
                    CountryName: "Brasil"
                }
            },
            products
        })
    })

    return await response.json()
}