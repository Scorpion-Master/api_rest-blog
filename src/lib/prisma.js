import { PrismaClient } from "../generated/prisma/index.js";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({
    log: ["error"],
  });
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: ["error"],
    });
  }
  prisma = global.prisma;
}

export { prisma };


