import React from "react"
import {Card, CardImg, CardText, CardBody} from 'reactstrap';


    function RenderComments ({comments})  {
        if(comments != null) { 
                const commentsDetais = comments.map(comment => {
                    return (
                            <div key={comment.id} className="container">
                                <div className ="row">
                                        <CardText >{comment.comment}</CardText>
                                        <CardText >--{comment.author}, {comment.date}</CardText>  
                                </div><br/>
                            </div>
                    )}   
            )
            return commentsDetais;
        }
        else {
            return (
            <div></div>
            )
        }
    }
    function RenderDish ({dish}) {
        if(dish != null ) {
            console.log(dish)
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <h2 className="card-title">{dish.name}</h2>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                )}
            else {
                return <div></div>
            }
        }
   


    const DishDetail = (props) => {     
        console.log(props.dish);                                                             
            if (props.dish != null) {
                return ( 
                        <div key ={props.dish.id} className="container">
                            <div className="row">
                                <RenderDish dish = {props.dish}></RenderDish>
                                <div className="col-12 col-md-5 m-1">
                                    <Card>
                                        <CardBody>
                                            <h2 className="card-title">Comments</h2>
                                            <RenderComments comments = {props.dish.comments} /> 
                                        </CardBody>
                                    </Card>
                                </div>                    
                            </div>
                        </div>
                )
            }
        else {
            return(<div></div>)
        }
}


export default DishDetail;