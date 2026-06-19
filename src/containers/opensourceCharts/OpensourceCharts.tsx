import React, { Component } from "react";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart";
import IssueChart from "../../components/issueChart/IssueChart";
import { Fade } from "react-reveal";
import "./OpensourceCharts.scss";
import { ThemeProps } from "../../types/portfolio";

const tools = [
  // Dev Environment
  { icon: "logos:git-icon", name: "Git" },
  { icon: "logos:github-icon", name: "GitHub" },
  { icon: "logos:visual-studio-code", name: "VS Code" },
  { icon: "logos:linux-tux", name: "Linux" },
  { icon: "logos:bash-icon", name: "Bash" },

  // Languages
  { icon: "logos:typescript-icon", name: "TypeScript" },
  { icon: "logos:javascript", name: "JavaScript" },

  // Node Ecosystem
  { icon: "logos:nodejs-icon", name: "Node.js" },
  { icon: "logos:npm-icon", name: "NPM" },
  { icon: "logos:nodejs-icon-alt", name: "NVM" },
  { icon: "simple-icons:yarn", name: "Yarn" },
  { icon: "simple-icons:pnpm", name: "pnpm" },
  { icon: "logos:pm2-icon", name: "PM2" },

  // Frontend
  { icon: "logos:react", name: "React" },
  { icon: "logos:nextjs-icon", name: "Next.js" },
  { icon: "logos:tailwindcss-icon", name: "Tailwind" },
  { icon: "tabler:brand-react-native", name: "React Native" },
  { icon: "logos:electron", name: "Electron" },
  { icon: "logos:storybook-icon", name: "Storybook" },

  // Build & Quality
  { icon: "logos:webpack", name: "Webpack" },
  { icon: "logos:vitejs", name: "Vite" },
  { icon: "logos:eslint", name: "ESLint" },
  { icon: "logos:prettier", name: "Prettier" },

  // API Layer
  { icon: "logos:graphql", name: "GraphQL" },
  { icon: "simple-icons:socketdotio", name: "Socket.io" },
  { icon: "logos:swagger", name: "Swagger" },
  { icon: "logos:postman-icon", name: "Postman" },
  { icon: "simple-icons:zod", name: "Zod" },

  // Cloud - AWS
  { icon: "logos:aws", name: "AWS" },
  { icon: "simple-icons:amazonec2", name: "EC2" },
  { icon: "simple-icons:amazons3", name: "S3" },
  { icon: "simple-icons:awslambda", name: "Lambda" },
  { icon: "simple-icons:amazonsqs", name: "SQS" },

  // Cloud - GCP, Azure & Others
  { icon: "logos:google-cloud", name: "GCP" },
  { icon: "logos:microsoft-azure", name: "Azure" },
  { icon: "logos:cloudflare-icon", name: "Cloudflare" },
  { icon: "logos:netlify", name: "Netlify" },
  { icon: "logos:vercel-icon", name: "Vercel" },
  { icon: "logos:heroku-icon", name: "Heroku" },

  // DevOps & IaC
  { icon: "logos:docker-icon", name: "Docker" },
  { icon: "logos:kubernetes", name: "Kubernetes" },
  { icon: "logos:nginx", name: "Nginx" },
  { icon: "logos:terraform-icon", name: "Terraform" },
  { icon: "simple-icons:githubactions", name: "CI/CD" },

  // Databases
  { icon: "logos:mongodb", name: "MongoDB" },
  { icon: "logos:postgresql", name: "PostgreSQL" },
  { icon: "logos:redis", name: "Redis" },
  { icon: "logos:firebase", name: "Firebase" },
  { icon: "logos:mysql-icon", name: "MySQL" },
  { icon: "logos:prisma", name: "Prisma" },
  { icon: "simple-icons:typeorm", name: "TypeORM" },

  // Testing
  { icon: "logos:jest", name: "Jest" },
  { icon: "logos:cypress-icon", name: "Cypress" },

  // Monitoring
  { icon: "logos:sentry-icon", name: "Sentry" },
  { icon: "logos:sonarqube", name: "SonarQube" },

  // Design & PM
  { icon: "logos:figma", name: "Figma" },
  { icon: "logos:jira", name: "Jira" },
  { icon: "logos:slack-icon", name: "Slack" },
  { icon: "logos:notion-icon", name: "Notion" },
];

class OpensourceCharts extends Component<ThemeProps> {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main-div">
        <Fade bottom duration={1500} distance="20px">
          <div className="os-tools-grid">
            {tools.map((t) => (
              <div className="os-tool-item" key={t.name} title={t.name}>
                <span
                  className="iconify os-tool-icon"
                  data-icon={t.icon}
                  data-inline="false"
                />
                <span
                  className="os-tool-name"
                  style={{ color: theme.secondaryText }}
                >
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </Fade>

        {/* Contribution Charts */}
        <div className="os-charts-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="os-charts-header" style={{ color: theme.text }}>
              Contributions
            </h1>
          </Fade>
        </div>
        <div className="os-charts-body-div">
          <PullRequestChart />
          <IssueChart />
        </div>
      </div>
    );
  }
}

export default OpensourceCharts;
