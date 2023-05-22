import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, email, telefone, cidade } = req.body

    const prisma = new PrismaClient()

    try {
      const result = await prisma.ligar.create({
        data: {
          nome,
          email,
          telefone,
          cidade,
        }
      })

      res.status(200).json({ message: 'Mensagem enviada com sucesso!' })
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro ao enviar a mensagem.' })
    } finally {
      await prisma.$disconnect()
    }
  }
}