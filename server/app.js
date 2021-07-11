import express from 'express';
import Journalctl from 'journalctl';
const app = express();
const port = 3000;

const journalLineArray = [];
const journalctl = new Journalctl({
    unit: 'pongrobot'
});
journalctl.on('event', (event) => {
    journalLineArray.push(event);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Brobot UI backend listening at http://localhost:${port}`)
});

journalctl.stop();
