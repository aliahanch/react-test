import React, {Component} from 'react';
import Title from "../Title";

class Empty extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name=" " title="سبد خرید خالی است "></Title>
                        <div className="row">


                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Empty;