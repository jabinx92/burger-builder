import React from 'react';

import classes from './Layout.css'

console.log(React.version);

const layout = (props) => (
    <div>

    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </div>
    
);

export default layout;