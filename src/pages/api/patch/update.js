import { PrismaClient } from "@prisma/client";

export default async function update(req, res) {
  try {
    if(req.method !== "PATCH") return res.status(400).json({ error: true, message: "Método não permitido" });

    const { id, name, email, password } = req.body;

    const prisma = new PrismaClient();

    const userData = {
      name: name,
      email: email,
    }

    if(password) {
      userData.password = password;
    }

    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: userData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    }).catch((error) => {
      res.status(400).json({ error: true, message: "Erro ao atualizar usuário", error });
      console.log(error);
    });

    res.status(200).json({ error: false, user, message: "Usuário atualizado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Erro interno aguarde alguns minutos e tente novamente" });
  }
}