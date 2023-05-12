import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, email, telefone, cidade } = req.body

    const prisma = new PrismaClient()

    try {
      // Crie uma nova entrada na tabela "message" usando o Prisma
      const result = await prisma.ligar.create({
        data: {
          nome,
          email,
          telefone,
          cidade,
        }
      })

      // Se a operação for bem sucedida, envie uma resposta com status 200
      res.status(200).json({ message: 'Mensagem enviada com sucesso!' })
    } catch (error) {
      // Se ocorrer um erro, envie uma resposta com status 500
      res.status(500).json({ error: 'Ocorreu um erro ao enviar a mensagem.' })
    } finally {
      // Feche a conexão do Prisma
      await prisma.$disconnect()
    }
  }
}