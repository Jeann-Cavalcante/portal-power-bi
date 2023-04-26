import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { authOptions } from "../../auth/[...nextauth]";

export default async function createDash(req, res) {
  try {

    if(req.method !== "POST") {
      return res.status(400).json({ error: true, message: "Método não permitido" });
    }

    const { name, category, slug } = req.body;
    console.log("🚀 ~ file: create.js:10 ~ createDash ~ name, category, slug :", name, category, slug );

    if(!name || !category || !slug) {
      return res.status(400).json({ error: true, message: "Preencha todos os campos" });
    }
    
    const prisma = new PrismaClient();

    const dash = await prisma.dash.create({
      data: {
        name,
        category,
        slug,
      },
    }).catch((error) => {
      if(error.code === "P2002") return res.status(409).json({ error: true, message: "Slug já cadastrado" });
      res.status(400).json({ error: true, message: "Erro ao criar dashboard", error });
      console.log(error);
    });

    res.status(200).json({ error: false, dash, message: "Dashboard criado com sucesso!" });

    
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: true, message: "Erro interno aguarde alguns minutos e tente novamente" });
  }
}