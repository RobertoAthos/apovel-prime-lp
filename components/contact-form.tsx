"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para enviar o formulário
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg">
        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">Mensagem enviada com sucesso!</h3>
        <p className="text-gray-600 mb-4">Agradecemos seu contato. Nossa equipe retornará em breve.</p>
        <Button onClick={() => setSubmitted(false)}>Enviar nova mensagem</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nome completo</Label>
          <Input id="name" placeholder="Digite seu nome" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" placeholder="(00) 00000-0000" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="seu@email.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle-type">Tipo de veículo</Label>
          <Select>
            <SelectTrigger id="vehicle-type">
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="car">Carro de passeio</SelectItem>
              <SelectItem value="motorcycle">Motocicleta</SelectItem>
              <SelectItem value="utility">Utilitário</SelectItem>
              <SelectItem value="truck">Caminhão</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea id="message" placeholder="Como podemos ajudar?" className="min-h-[120px]" required />
      </div>
      <Button type="submit" className="w-full bg-yellow hover:bg-yellow/90 text-dark font-medium">
        Enviar mensagem
      </Button>
    </form>
  )
}
