import express, { Request, Response } from 'express';

import * as bookController from './controllers/bookcontroller';

//Express config
const app = express();
app.use(express.json());
app.set('port', process.env.PORT || 3000);

app.get('/', (req: Request, res: Response) => res.send('Hi!'));

//API Endpoints
app.get('/books', bookController.allBoks);
app.get('/book/:id', bookController.getBook);
app.post('/book', bookController.addBook);
app.put('/book/:id', bookController.updateBook);
app.delete('/book/:id', bookController.deleteBook);

const server = app.listen(app.get('port'), () => {
    console.log(`App running on http://localhost:${app.get('port')}`);
});