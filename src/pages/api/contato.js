import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {

 

  if (req.method === "POST") {
    const { nome, email, telefone, cidade, mensagem } = req.body;
    
    try {
      const novoLigar = await prisma.contato.create({
        data: {
          nome,
          email,
          telefone,
          cidade,
          mensagem,
        },
      });
      res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      res.status(500).json({ message: "Erro ao cadastrar usuário" });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}

