import React,{Component} from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class testmap extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <OutboundLink
                    href="https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/"
                >
                    Visit the Google Analytics plugin page!
    </OutboundLink>
            </div>
        );
    }
}

export default testmap;