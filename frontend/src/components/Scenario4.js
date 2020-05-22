import React from "react";
//import CanvasJSReact from "../assets/canvasjs.react";
//import LineChart from "./LineChart";
import PieChart from "./PieChart";
//import Paraluna from "./Paraluna";
import scenario4 from "../testData/scenario4.json";
import { Grid, Row, Col, Panel } from "rsuite";
import MultiLines from "./MultiLines";
import MultiBars from "./MultiBars";
import BarChart from "./BarChart";

export default class Scenario4 extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.url + this.props.location.search);
    var url = this.props.match.params.url + this.props.location.search;
    var barChartData;
    var barChartData1;
    var muitiBarChartData;
    var muitiBarChartData1;
    var muiltiLineChartData;

    this.state = {
      isLoading: true,
      url: url,
      barChartData: barChartData,
      barChartData1: barChartData1,
      muitiBarChartData: muitiBarChartData,
      muitiBarChartData1: muitiBarChartData1,
      muiltiLineChartData: muiltiLineChartData
    };

    //  this.fetchData();
  }

  componentWillMount() {
    var barChartData;
    var barChartData1;
    var muitiBarChartData;
    var muitiBarChartData1;
    var muiltiLineChartData;
   /* fetch()//"http://172.26.132.122:5000/" + this.state.url)
      .then(res => res.json())
      .then(data => {*/
        var data = scenario4;
        console.log(data);
        barChartData = data.barChart_gp_per_persion;
        barChartData1 = data.barChart_hospital_per_person;
        muitiBarChartData =
          data.income_axis_by_lga_selected_legend_by_selected_income_group
            .multiBarChart_income_by_lga_by_group;

         muitiBarChartData1 =
          data.income_axis_by_selected_income_group_legend_by_lga_selected.multiBarChart_income_by_group_by_lga;
        muiltiLineChartData = data.state_covid_count.lineChart;
        this.setState({
          barChartData: barChartData,
          barChartData1: barChartData1,
          muitiBarChartData: muitiBarChartData,
          muitiBarChartData1: muitiBarChartData1,
          muiltiLineChartData: muiltiLineChartData,
          isLoading: false
        });
        console.log(this.state.muitiBarChartData1);
   /*   })
      .then(
        res => {
          if (res.ok) {
            console.log("ok");
          } else {
            console.log("error");
          }
          console.log(res.json());
        },
        err => {
          console.log(err);
        }
      )
      .then(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );*/
  }

  render() {
    return this.state.isLoading ? (
      "loading"
    ) : (
      <Grid fluid >
        <Row className="show-grid" gutter={30}>
          {this.state.barChartData.map(item => {
            return (
              <Col md={12} sm={12} >
                <Panel shaded bordered expanded>
                  <BarChart data={item} title={item.title} />
                </Panel>
              </Col>
            );
          })}
          {
            <Col md={12} sm={12}>
              <Panel shaded bordered expanded>
                <MultiLines
                  type="line"
                  data={this.state.muiltiLineChartData}
                  title="english_tweet_percentage"
                />
              </Panel>
            </Col>
          }
        </Row>

        <Row className="show-grid" gutter={30}>
          <Col md={12} sm={12}>
            <Panel shaded bordered expanded>
              <MultiBars
                type="column"
                data={this.state.muitiBarChartData}
                title="twitter_word_len"
              />
            </Panel>
          </Col>
          {this.state.barChartData.map(item => {
            return (
              <Col md={12} sm={12} >
                <Panel shaded bordered expanded>
                  <BarChart data={item} title={item.title} />
                </Panel>
              </Col>
            );
          })}
        </Row>
        <Row className="show-grid" gutter={30}>
          <Col md={12} sm={12}>
            <Panel shaded bordered expanded>
              <MultiBars
                type="column"
                data={this.state.muitiBarChartData1}
                title="twitter_word_len"
              />
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}