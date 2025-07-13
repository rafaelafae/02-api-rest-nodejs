import { FastifyReply, FastifyRequest } from "fastify"

export async function checkSessionIdExists(request: FastifyRequest, reply: FastifyReply) { // Interceptador para validar sessionId

    const sessionId = request.cookies.sessionId

    if (!sessionId) {
        return reply.status(401).send({
            error: 'Unauthorized.',
        })
    }
}