import React from 'react';
import {Badge} from 'reactstrap';

const Labels = ({ labels }) => {
    return (
        <span style={{ paddingLeft: 20 }}>
            {
                labels.map(label => (
                    <Badge key={label.id} color='info' style={{ marginRight: 7}} >
                        { label.name }
                    </Badge>
                ))
            }
        </span>
    )
}

export default Labels;