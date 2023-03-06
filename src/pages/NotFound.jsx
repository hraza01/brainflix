import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h1>Not Found</h1>

            <p>
                Oops! It seems like you're lost, let me help you find your way
                back home! :) The following problems could be the case:
            </p>

            <ul>
                <li>The link is broken</li>
                <li>This page never existed</li>
                <li>This page has been removed</li>
            </ul>

            <Link to="/">Click here to go back home</Link>
        </div>
    );
}

export default NotFound;
