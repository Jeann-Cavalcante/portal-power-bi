import { PrismaClient } from "@prisma/client";
import { z } from "zod";

export default async function createUser(req, res) {
  try {

    if (req.method !== "POST") {
      return res.status(400).json({ error: true, message: "Método não permitido" });
    }

    const { name, email, password } = req.body;

    const prisma = new PrismaClient();

    const UserSchema = z.object({
      name: z.string().min(3).max(20),
      email: z.string().email(),
      password: z.string().min(3).max(12),
    })

    const data = await UserSchema.parseAsync({ name, email, password })
      .catch((error) => {
        res.status(400).json({ error: true, message: "Favor verificar os dados", error });
        console.log(error);
      });

    const user = await prisma.user.create({
      data: data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    }).catch((error) => {
      if(error.code === "P2002") return res.status(409).json({ error: true, message: "Email já cadastrado" });
      res.status(400).json({ error: true, message: "Erro ao criar usuário", error });
      console.log(error);
    });

    console.log(user);

    res.status(200).json({ error: false, user, message: "Usuário criado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Erro interno aguarde alguns minutos e tente novamente" });
  }
}