/**
 * @author WMXPY
 * @overview generated by ghoti-cli
 * @fileoverview Page set PageGhotiIndex
 */

import * as React from 'react';
import * as Component from '../component/import';
import * as Func from '../func/import';
import * as Lambda from '../lambda/import';

import Config from '../config/config';

import '../style/index.sass';

export interface IProps {

}

export interface IState {

}

class PageGhotiIndex extends React.Component<IProps, IState> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (<div className="ghoti-contain">
            <div className="full-page f">
                <div className="g">
                    <div>
                        <img src={require('../../public/res/championgg.png')} />
                    </div>
                    <div>
                        Champion <span className="square" >BOT</span>
                    </div>
                    <a href="https://discordapp.com/api/oauth2/authorize?client_id=427003334260555781&permissions=0&scope=bot">Invite Champion <span className="small-square" >BOT</span> to your server</a>
                </div>
            </div>
            <div>
                Try:
                <ul>
                    <li>Hi</li>
                    <li>Help</li>
                    <li>Mid Zed</li>
                    <li>Top Sion</li>
                    <li>Sup Nami</li>
                </ul>
            </div>
        </div>);
    }
}

export default PageGhotiIndex;
