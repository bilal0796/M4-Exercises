import React from 'react';
import { Card } from 'react-bootstrap'
import SciFi from '../data/Sci-fi.json'

const LatestReleases = () => ( 
    <div className="d-flex flex-wrap">{
        SciFi.map(book => {
            // return <img className="book-cover" src={book.img} />
            return <Card className="book-cover">
                < Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>
                        {book.title}
                    </Card.Title>
                </Card.Body>
            </Card>
        })
    }</div >
)

export default LatestReleases