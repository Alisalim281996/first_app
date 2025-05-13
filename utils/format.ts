export const formatCurrency = (amount: number | null) => {
    const value = amount || 0
    return new Intl.NumberFormat('en-Us', {
        style: "currency",
        currency: "USD"
    }).format(value)
}
