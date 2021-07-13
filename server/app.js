import express from 'express';
import { promisify } from 'util';
import { exec } from 'child_process';
import cors from 'cors';

const execAsync = promisify(exec)

const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/journalctl', async (req, res) => {
    const {
        stdout
    } = await execAsync(`journalctl -u pongrobot -n 1000`);
    res.send([...stdout.split('\n')]);
});

app.listen(port, () => {
    console.log(`Brobot UI backend listening at http://localhost:${port}`)
});
