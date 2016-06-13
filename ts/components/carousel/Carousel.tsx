import * as React from "react";
import * as classNames from "classnames";
import * as Slider from 'react-slick';
export default class Carousel extends React.Component<any,any> {
    static defaultProps = {
        dots: true,
        arrows: false,
    }

    constructor(props){
        super(props);
    }

    render() {
        return <div className="ui-slider">
                    <Slider {...this.props}>
                        {this.props.children}
                    </Slider>
                </div>
    }

}