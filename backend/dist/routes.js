"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const FeedbackController_1 = require("./controllers/FeedbackController");
const router = (0, express_1.Router)();
exports.router = router;
const feedbackController = new FeedbackController_1.FeedbackController();
router.post('/feedbacks', feedbackController.handle);
