import React, {Component} from 'react';
import {Container, Grid, Card, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class LinkUGuide extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Grid centered>
                    <div>
                    <Image src="http://localhost:8000/media/meeting_default_image.jpg" />
                    </div>

                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </Grid>
            </Container>
        );
    }

}

export default LinkUGuide;
