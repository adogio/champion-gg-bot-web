/**
 * @overview generated by ghoti-cli
 * @fileoverview server side render middleware
 */

import renderer from './render';

const middle = (Route, Props): string => {
    const route = Route || '/'
    const props = Props || {}
    return renderer(route, props);
};

export default middle;
