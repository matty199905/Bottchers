export const formatPrice = (price: number) => {
    return price?.toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS'
    })
}