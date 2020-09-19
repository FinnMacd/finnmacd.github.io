import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            style={{height: '200px'}}/>
                    </div>

                    <h2 style={{paddingTop: '2em'}}>Finn Macdonald</h2>
                    <h4 style={{color:'grey'}}>Programmer</h4>
                    
                    <hr style={{borderTop: '3px silid #8b3fb2', width: '50%'}}/>
                    
                    <p>This is some really cool information about me!</p>
                    
                    <hr style={{borderTop: '3px silid #8b3fb2', width: '50%'}}/>

                    <h5>Address</h5>
                    <p>this play, you know it, 909</p>

                </Cell>
                <Cell className="resume-right-col" col={4}>Right</Cell>
            </Grid>
        );
    }
}

export default Resume;