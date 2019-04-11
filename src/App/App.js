import React, { Component } from 'react';
import SearchLine from '../SearchLine/SearchLine'
import Information from '../Information/Information'
import fetch from 'isomorphic-fetch'

class App extends Component {
    constructor(props) {
        super(props);
        this.data=props.data;
        this.newLine=this.newLine.bind(this);
        this.state={
            line:'',
            direction:'',
            mode:'',
            stations:[],
        }
    }
//
    newLine(line,direction){
        this.setState({line,direction});
        fetch(`https://api.tfl.gov.uk/Line/${line}/Route/Sequence/${direction}?app_id=53a77f61&app_key=%20cf8fa7361a52fd285717bed19acad1bc`)
            .then(response=>{
                return response.status === 200 ?  response.json() : {mode:'',stations:[],line:''};
            })
            .then(json=>{
                this.setState({mode:json.mode,line:json.lineName});
                this.setState({stations:json.stations.map((station)=>station.name)});
            });
    };

    render() {
    return (
        <div>
            <SearchLine
                onNewLine={this.newLine}
                lineList={this.data}
            />
            <Information
                mode={this.state.mode}
                name={this.state.line}
                stations={this.state.stations}
            />

        </div>



    )
  }
}

export default App;
