import React,{ Component } from "react"
import {Card, CardImg, CardText, CardBody} from 'reactstrap';
import './MainComponent'


class DishDetail extends Component {

    render() {  
        console.log("coucou")
        console.log(this.props.dish.description)
        const commentDetail = () => this.props.comments.map(comment => {
            return(
                    <div>  
                        <CardText>{comment.comment}</CardText>
                        <CardText>--{comment.author}, {comment.date}</CardText>
                    </div>    
                )
            })  
                                                                                   
        if (this.props != null) {
            return ( 
                    <div key={this.props.dish} className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                <Card>
                                    <CardImg top src={this.props.image} alt={this.props.name}/>
                                    <CardBody>
                                        <h2 className="card-title">{this.props.name}</h2>
                                        <CardText>{this.props.description}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-12 col-md-5 m-1">
                                <Card>
                                    <CardBody>
                                        <h2 className="card-title">Comments</h2>
                                        <CardText>{commentDetail}</CardText>                     
                                    </CardBody>
                                </Card>
                            </div>                    
                        </div>
                    </div>
            )
        }
        else {
            return(<div></div>
            )  
        }
    }

}

export default DishDetail;
 