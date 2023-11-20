"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
;
const gamesList = [
    {
        name: "eFootball",
        code: 1
    },
    {
        name: "FIFA",
        code: 2
    },
    {
        name: "GTA vice city",
        code: 3
    },
    {
        name: "Max Payne 2",
        code: 4
    },
    {
        name: "Call of Duty 3",
        code: 5
    },
];
app.get('/getGamesList', (req, res) => {
    res.send(gamesList);
});
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
