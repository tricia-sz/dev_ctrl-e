import { PrismaClient } from "@prisma/client"
 //arquivo de reconhecimento de ambiente dev / production

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
 
 const prisma = globalForPrisma.prisma || new PrismaClient()
 export default prisma
 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
