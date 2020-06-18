import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Finn Macdonald</h2>
                        <img 
                            src="https://cdn4.iconfinder.com/data/icons/avatars-63/33/male_8-512.png"
                            alt="avatar"
                            style={{height: '250px'}}/>
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
                            i am a cool guy who really likes to program
                            and do cool stuff like juggle and play music!
                        </p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope" areia-hidden="true"/>
                                        finn.macdonald@live.ca
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-instagram" areia-hidden="true"/>
                                        @finigus
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-github" areia-hidden="true"/>
                                        FinnMacd
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default About;