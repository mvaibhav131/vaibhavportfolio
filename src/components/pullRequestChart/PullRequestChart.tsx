import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Fade } from "react-reveal";
import "./PullRequestChart.scss";
import PullRequestData from "../../shared/opensource/pull_requests.json";

ChartJS.register(ArcElement, Tooltip, Legend);

class PullRequestChart extends Component<Record<string, never>> {
  render() {
    const prs = PullRequestData.data || [];
    const open = prs.filter((p) => p.state === "OPEN").length;
    const merged = prs.filter((p) => p.state === "MERGED").length;
    const closed = prs.filter((p) => p.state === "CLOSED").length;

    const data = {
      labels: ["Open", "Merged", "Closed"],
      datasets: [
        {
          data: [open, merged, closed],
          backgroundColor: ["#28a745", "#6f42c1", "#d73a49"],
          hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd"],
        },
      ],
    };

    return (
      <div className="pr-chart">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="pr-chart-header">Pull Request Distribution</h2>
        </Fade>
        <Doughnut
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            animation: {
              duration: 4000,
            },
          }}
        />
      </div>
    );
  }
}

export default PullRequestChart;
