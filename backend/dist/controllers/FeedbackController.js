"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackController = void 0;
const NodemailerMailAdapter_1 = require("../adapters/NodeMailer/NodemailerMailAdapter");
const PrismaFeedbackRepository_1 = require("../repositories/prisma/PrismaFeedbackRepository");
const SubmitFeedbackUseCase_1 = require("../useCases/SubmitFeedbackUseCase");
class FeedbackController {
    async handle(request, response) {
        const { type, comment, screenshot } = request.body;
        const prismaFeedbacksRepository = new PrismaFeedbackRepository_1.PrismaFeedbacksRepository();
        const nodemailerMailAdapter = new NodemailerMailAdapter_1.NodemailerMailAdapter();
        const submitFeedbackUseCase = new SubmitFeedbackUseCase_1.SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdapter);
        await submitFeedbackUseCase.execute({ type, comment, screenshot });
        return response.status(201).send();
    }
}
exports.FeedbackController = FeedbackController;
