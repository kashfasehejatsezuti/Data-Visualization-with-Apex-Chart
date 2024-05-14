import React, { Component } from "react";
import Chart from "react-apexcharts";
import { series } from "./Data";

export default class ApexBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: series,

      options: {
        chart: {
          type: "bar",
          height: 520,
          id: "apex-example",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["µ1", "µ2", "µ3", "µ4", "µ5"],
          title: {
            text: "$ (Months)",
          },
        },
        yaxis: {
          title: {
            text: "$ (thousands)",
          },
        },
        // fill: {
        //   opacity: 1,
        // },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <>
        <div>Welcome to Apex charts</div>
        <div>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={520}
          />
        </div>
      </>
    );
  }
}
