import React, { Component } from "react";
import dummyData from './Dummy-Data';
import Connections from '../containers/Connections';
import Promoted from '../containers/Promoted';
import People from '../containers/People';
import styled from 'styled-components';
import "./MyNetwork.css"

const PeopleContainerStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 606px;
  minimum-width: 610px;
  background-color: #FFFFFF;
  padding:2px;

`;

class MyNetwork extends Component {
    state = { dummyData };
    render() {

        return (
            <div className="row">

                <div className="col-lg-3">
                    <Connections />
                </div>

                <div className="col-lg-6">
                    <PeopleContainerStyle>
                        {this.state.dummyData.map((person, i) => {
                            return (
                                <People
                                    key={i}
                                    person={person}
                                />)
                        })}
                    </PeopleContainerStyle>
                </div>

                <div className="col-lg-3">
                    <Promoted />
                </div>

            </div>
        );
    }
}

export default MyNetwork;
