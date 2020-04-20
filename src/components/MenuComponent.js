import React,{ Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody} from 'reactstrap';


class Menu extends Component {
        constructor(props) {
            super(props);
            this.state= {
                selectedDish: null
            };
}

        onDishSelect(dish) {
            this.setState({selectedDish: dish});
        }

        renderDish(dish) {
            if(dish != null) {
                return(
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={dish.image} alt={dish.name}/>
                                    <CardBody>
                                        <h2 className="card-title">{dish.name}</h2>
                                        <CardText>{dish.description}</CardText>
                                    </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardBody>
                                    <h2 className="card-title">Comments</h2>
                                    <CardText>{dish.comments.map( com => {
                                        return (
                                            <div>  
                                                <CardText>{com.comment}</CardText>
                                                <CardText>--{com.author}, {com.date}</CardText>
                                            </div>  
                                        )
                                    })}
                                    </CardText>
                                </CardBody>
                            </Card>
                     </div>
                    </div>
                )
            }
            else {
                return(<div></div>
                )  
            }
        }
    
     render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                  <div key={dish.id} className="col-12 col-md-5 m-1">
                      <Card onClick={ () => {this.onDishSelect(dish)}}>
                          <CardImg width="100%" src={dish.image} alt={dish.name} />
                          <CardImgOverlay>
                              <CardTitle>{dish.name}</CardTitle>
                          </CardImgOverlay>   
                      </Card>
                  </div>
                );
        });

            return (
                <div className="container">
                    <div className="row">
                         {menu}
                    </div>
                    <div>
                        {this.renderDish(this.state.selectedDish)}            
                    </div>
                </div>
            )
    }
}

export default Menu
