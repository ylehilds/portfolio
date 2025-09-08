import React, { Component } from "react";
import { portfolioTitle, portfolioItems, portfolioSectionBackgroundColor } from "../ProfileInformation";
import { Card, CardTitle, Button, Col, Row } from "react-materialize";

const PSListStyles = {
  backgroundColor: portfolioSectionBackgroundColor
}


let darkStyle = {
  color: 'white',
  backgroundColor: 'black',
};

class PortfolioSection extends Component {

  render() {

    let darkModeStyle = this.props.darkMode ?
      "black white-text" : '';

    return (
      <div className="PortfolioSection" style={PSListStyles} >
        <h1 className="PS-Title">{portfolioTitle}</h1>
        <div style={PSListStyles} className="PS-List">
            <Row className="ps-row">
                <div className="ps-grid">
                    {portfolioItems.map((item, i) => (
                        <div key={i} className="ps-cell">
                            <Card
                                className={`ps-card ${darkModeStyle}`}
                                header={<CardTitle image={item.imageUrl} waves="light" />}
                                title={item.title}
                            >
                                <div className="ps-card-body">
                                    <hr />
                                    <b>Tech: </b> {item.tech}
                                    <br /><br />
                                    {item.description}
                                </div>
                                <br />
                                <div className="ps-card-actions">
                                    <Button waves="light" node="a" onClick={() => window.open(item.githubLink, "_blank")}>GitHub</Button>
                                    {item.demo && (
                                        <Button waves="light" node="a" onClick={() => window.open(item.demo, "_blank")}>Demo</Button>
                                    )}
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </Row>
        </div>
      </div>
    );
  }
}

export default PortfolioSection;
