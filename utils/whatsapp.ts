/**
 * Função para redirecionar para o WhatsApp com uma mensagem predefinida
 */
export function redirectToWhatsApp() {
  const phoneNumber = "5573984632311" // +55 73 9846-3231 (formato para URL)
  const message = "Olá! Gostaria de saber mais sobre proteção veicular e ser um associado."
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&?text=${encodedMessage}`, "_blank")
}
