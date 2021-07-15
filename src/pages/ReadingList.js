import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleBook from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';

const ReadingList = () => {
    const readingList = useSelector(state => state.books.readingList)
    return (
        <PageLayout>
             {
            readingList.length ? 
            readingList.map(book => <SingleBook book={book}></SingleBook>) : <p>Looks like you've finished all your books! Check them out in your <Link to="finish">finished books</Link> or <Link to="/">discover more</Link>.</p>
            }
        </PageLayout>
    );
};

export default ReadingList;