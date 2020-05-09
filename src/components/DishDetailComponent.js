import React,{ Component } from "react"
import {Card, CardImg, CardText, CardBody} from 'reactstrap';


class DishDetail extends Component {

    render() { 
        if(this.props.dish != null) {
            const commentDetail = this.props.dish.comments.map(comment => {
                return(
                        <div key={comment.id} className="container">
                            <div className="row">
                                    <CardText >{comment.comment}</CardText>
                                    <CardText >--{comment.author}, {comment.date}</CardText>
                            </div><br/>
                        </div>  
                    )
                })  
                                                                                       
            if (this.props != null) {
                return ( 
                        <div key ={this.props.dish.id} className="container">
                            <div className="row">
                                <div className="col-12 col-md-5 m-1">
                                    <Card>
                                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name}/>
                                        <CardBody>
                                            <h2 className="card-title">{this.props.dish.name}</h2>
                                            <CardText>{this.props.dish.description}</CardText>
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
        } 
        
        else {
            return(<div></div>
            )  
        }
    }
}

export default DishDetail;
 