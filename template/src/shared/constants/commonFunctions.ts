export function filterNonNull(obj: any) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v));
}

export function numberWithDots(number: Number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
