import React from 'react';
import ListPicture from './HeaderContent/listPicture';
//style
const listBanner = { width: '100%', height: '235px', paddingTop: '25px', display: 'flex', justifyContent: 'center' };

function Content(props) {
    return (
        <div>
            <div style={listBanner}>
                <ListPicture />
            </div>
        </div>
    );
}

export default Content;
