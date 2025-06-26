/**
 * Função para redirecionar para o WhatsApp com uma mensagem predefinida
 */
export function redirectToWhatsApp() {
  const phoneNumber = "557398463231" // +55 73 9846-3231 (formato para URL)
  const message = "Olá, tenho interesse em realizar a cotação do meu veículo com a Apovel Prime! 🚘"
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&?text=${encodedMessage}`, "_blank")
}
