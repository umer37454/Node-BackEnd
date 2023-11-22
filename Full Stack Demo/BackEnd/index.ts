import express, {Express, Request, Response} from "express";
const port: number = 3000;

const app: Express = express();
interface gamelist {
  name: string,
  code: number
};

const gamesList: gamelist[] = [
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
]

app.get('/api/getGamesList', (req: Request, res: Response) => {
  res.send(gamesList);
})

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});