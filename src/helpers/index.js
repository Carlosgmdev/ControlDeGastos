export const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random + fecha;
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones);
}