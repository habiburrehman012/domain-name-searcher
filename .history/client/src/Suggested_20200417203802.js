import React, { Component } from 'react'
import axios from 'axios'

class Suggested extends Component {

    constructor(props)
    {
        super(props);
        this.state= {
            suggested:[]
        }
    }

    componentWillMount()
    {
        axios({
            'method': 'GET',
            'url': `/domain/suggested?domain=${this.props.domain}&limit=10`,
            'ContentType':'application/json'
        }).then((response)=>{
            
            var arr = JSON.parse(response.data.domains);
            console.log("arr=",arr);
            this.setState({
                suggested:arr
            })
        }).catch(error=>{
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h5>Our Suggestions</h5>
                <table>
                    <tr>
                        <th>Domain</th>
                        <th>Availability</th>
                        <th>Price</th>
                    </tr>
                    {this.state.suggested.map((element,index)=>(<tr key={index}><td>{element.domain}</td>
                    <td>{element.available}</td><td>{element.currency+" "+element.price}</td></tr>))}
                </table>
            </div>
        )
    }
}

export default Suggested;