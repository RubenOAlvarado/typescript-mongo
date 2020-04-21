import { Request, Response } from 'express';
import Book from '../book';

export let allBoks = (req: Request, res: Response) => {
    let books = Book.find((err: any, books: any) => {
        if(err) res.send('Error');

        res.send(books);
    });
};

export let getBook = (req: Request, res: Response) => {
    let book = Book.findById(req.params.id, (err: any, book: any) => {
        if(err) res.send(err);

        res.send(book);
    });
};

export let deleteBook = (req: Request, res: Response) => {
    let book = Book.deleteOne({__id: req.params.id}, (err: any) => {
        if(err) res.send(err);

        res.send('Book deleted!');
    });
};

export let updateBook = (req:Request, res: Response) => {
    console.log(req.body);
    let book = Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err:any) => {
            if(err) res.send(err);

            res.send('Book updated!');
        }
    );
};

export let addBook = ( req: Request, res: Response) => {
    let book = new Book(req.body);

    book.save((err: any) => {
        if(err) res.send(err);

        res.send(book);
    });
};