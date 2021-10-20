import * as express from 'express';
import "dotenv/config";
import { router } from './routes';
const port = 4000;
const app = express();

app.use(express.json());

app.use(router);













app.get('/github', (req, res) => {

    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)

   
})

app.get('/signin/callback', (req, res) => {
    const { code } = req.query;

    res.send(code);
})


app.listen(port, () => console.log(`Server is running on port ${ port }`));