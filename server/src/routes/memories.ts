import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function memoriesRoutes(app: FastifyInstance) {
  app.get("/memories", async () => {
    const memories = prisma.memory.findMany({
      orderBy: {
        createAt: "asc",
      },
    });

    return (await memories).map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat("..."),
      };
    });
  });
  app.get("/memories/:id", async (request) => {
    // Aqui utilizo o Zod para validar o meu ID sendo uma string, e assim sendo mais fácil de trabalhar com ele no request.params
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    //  Aqui eu pego o meu request.params e passando para o paramsSchema e realizando uma validação e vendo que o ID é mesmo uma string. Caso não seja, será disparado um erro.
    const { id } = paramsSchema.parse(request.params);

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return memory;
  });
  app.post("/memories", async (request) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    });

    const { content, isPublic, coverUrl } = bodySchema.parse(request.body);

    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: "2f797770-5cec-46f6-b62a-22692d85b9f3",
      },
    });

    return memory
  });
  app.put("/memories:id", async () => {});
  app.delete("/memories:id", async () => {});
}
