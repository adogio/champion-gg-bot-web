/**
 * @overview generated by ghoti-cli
 * @fileoverview server side render
 */

import * as React from 'react';

import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import StaticRouter from 'react-router-dom/StaticRouter';

import routes from '../src/root/routes';

export default function (route, data): string {
    const content = renderToString(
        <html>
            <head>
                <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                <meta name="content-language" content="en" />
                <meta name="language" content="en" />
                <meta name="description" content="Invite Champion <Bot> to your discord server" />
                <meta name="keywords" content="Champion League BOT discord" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="theme-color" content="#000000" />
                <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
                <link rel="stylesheet" href="bundle.css" />
                <title>{"Chamgpion <BOT>"}</title>
            </head>
            <body>
                <div id="container">
                    <StaticRouter location={route} context={{}} >
                        {renderRoutes(routes(data))}
                    </StaticRouter>
                </div>
            </body>
            <script id="initial-data" type="text/plain" data-json={JSON.stringify(data)}></script>
            <script src="lite.js"></script>
        </html>
    );

    return content;
};
