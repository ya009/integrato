import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {

 

  if (req.method === "POST") {
    const response = req.body;
    console.log(response)
    
    try {
      const novoContrato = await prisma.contrato.create({
        data: {
          nome: response.nome,
          email: response.email,
          telResidencial: response.telefoneRes,
          telComercial: response.telefoneCom,
          telefone: response.celular,
          rg: response.rg,
          cpf: response.cpf,
          dataNasc: response.dataNasc,
          cidade: response.cidade,
          cep: response.cep,
          rua: response.rua,
          numero: response.numero,
          bairro: response.bairro,
          complemento: response.complemento,
          distrito:response.distrito,
          plano: response.plano,
          vencimento: response.vencimento

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
