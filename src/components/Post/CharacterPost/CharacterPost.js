import React from 'react';

import { Card, Image } from 'semantic-ui-react';
import danyImg from '../../../assets/images/dany.png';


const CharacterPost = (props) => {

        return (

        <Card>
            <Image src={danyImg} />
            <Card.Content>
            <Card.Header>{props.post.name}</Card.Header>
            <Card.Meta>{props.post.type}</Card.Meta>
            </Card.Content>
        </Card>

        )
}




export default CharacterPost;