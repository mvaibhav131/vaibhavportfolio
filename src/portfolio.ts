/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vaibhav's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Vaibhav More Portfolio",
    type: "website",
    url: "http://vaibhavmore.in/",
  },
};

//Home Page
const greeting = {
  title: "Vaibhav More",
  logo_name: "Vaibhav More",
  nickname: "Full Stack Developer",
  subTitle:
    "An enthusiastic Full Stack Developer driven by a relentless pursuit to craft comprehensive solutions that foster sustainable and scalable social and technical ecosystems, aiming to make a significant impact.",
  resumeLink:
    "https://drive.google.com/file/d/1hDZEKRehGeMqvhrv9w_r_eAMrUKjRocu/view?usp=sharing",
  portfolio_repository: "https://github.com/mvaibhav131",
  githubProfile: "https://github.com/mvaibhav131",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/mvaibhav131",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vaibhav131/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@mvaibhav131",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gitlab",
    link: "https://gitlab.com/mvaibhav131",
    fontAwesomeIcon: "fa-gitlab", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:mvaibhav131@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/mvaibhav131",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/mvaibhav131/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vaibhavmore1997/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building scalable, performant frontends using React.js, Next.js, TypeScript, and Vite with component-driven architecture.",
        "⚡ Designing and developing RESTful and GraphQL APIs using Node.js, Express.js, and NestJS following clean architecture principles.",
        "⚡ Developing cross-platform mobile applications using React Native.",
        "⚡ Implementing state management solutions using Redux, Zustand, and React Context.",
        "⚡ Establishing automated testing pipelines with Jest, Cypress, Mocha, Supertest, and React Testing Library.",
        "⚡ Integrating WebSockets and real-time communication using Socket.io.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs-icon",
          style: { color: "#000000" },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
          style: { color: "#764ABC" },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: { color: "#38B2AC" },
        },
        {
          skillName: "Vite",
          fontAwesomeClassname: "logos:vitejs",
          style: { color: "#646CFF" },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs-icon",
          style: { color: "#339933" },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "skill-icons:expressjs-dark",
          style: { color: "#000000" },
        },
        {
          skillName: "NestJs",
          fontAwesomeClassname: "logos:nestjs",
          style: { color: "#E0234E" },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "logos:graphql",
          style: { color: "#E10098" },
        },
        {
          skillName: "Socket.io",
          fontAwesomeClassname: "simple-icons:socketdotio",
          style: { color: "#010101" },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "tabler:brand-react-native",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "logos:sass",
          style: { color: "#CC6699" },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "logos:jest",
          style: { color: "#C21325" },
        },
        {
          skillName: "Cypress",
          fontAwesomeClassname: "logos:cypress-icon",
          style: { color: "#17202C" },
        },
        {
          skillName: "Swagger",
          fontAwesomeClassname: "logos:swagger",
          style: { color: "#85EA2D" },
        },
        {
          skillName: "Webpack",
          fontAwesomeClassname: "logos:webpack",
          style: { color: "#8DD6F9" },
        },
      ],
    },
    {
      title: "Cloud, DevOps & Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Architecting and deploying event-driven serverless applications on AWS using Lambda, API Gateway, SQS, S3, and EC2.",
        "⚡ Containerising applications with Docker and orchestrating deployments using Kubernetes.",
        "⚡ Setting up and managing CI/CD pipelines using Atlassian Bamboo, GitHub Actions, and automated deployment workflows.",
        "⚡ Designing microservice architectures with inter-service communication via REST, message queues (SQS, RabbitMQ), and event streams (Kafka).",
        "⚡ Managing cloud infrastructure across AWS, GCP, and Azure with a focus on scalability, security, and cost optimisation.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "EC2",
          fontAwesomeClassname: "simple-icons:amazonec2",
          style: { color: "#FF9900" },
        },
        {
          skillName: "S3",
          fontAwesomeClassname: "simple-icons:amazons3",
          style: { color: "#569A31" },
        },
        {
          skillName: "Lambda",
          fontAwesomeClassname: "simple-icons:awslambda",
          style: { color: "#FF9900" },
        },
        {
          skillName: "SQS",
          fontAwesomeClassname: "simple-icons:amazonsqs",
          style: { color: "#FF4F8B" },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "logos:google-cloud",
          style: { color: "#4285F4" },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
          style: { color: "#0089D6" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "logos:nginx",
          style: { color: "#009639" },
        },
        {
          skillName: "CI/CD",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "logos:terraform-icon",
          style: { color: "#7B42BC" },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "logos:netlify",
          style: { color: "#00C7B7" },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "logos:vercel-icon",
          style: { color: "#000000" },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
          style: { color: "#430098" },
        },
      ],
    },

    {
      title: "UI/UX & Product Thinking",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing intuitive, accessible user interfaces for web and mobile applications using Figma and Adobe XD.",
        "⚡ Translating wireframes and prototypes into pixel-perfect, responsive React components.",
        "⚡ Collaborating with product managers using Agile/Scrum methodologies and tools like Jira and Confluence.",
        "⚡ Applying UX best practices — user flows, component libraries, design systems — to ensure consistent product experiences.",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "logos:figma",
          style: { color: "#F24E1E" },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: { color: "#FF2BC2" },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "logos:jira",
          style: { color: "#0052CC" },
        },
        {
          skillName: "Confluence",
          fontAwesomeClassname: "logos:confluence",
          style: { color: "#172B4D" },
        },
        {
          skillName: "Notion",
          fontAwesomeClassname: "logos:notion-icon",
          style: { color: "#000000" },
        },
        {
          skillName: "Storybook",
          fontAwesomeClassname: "logos:storybook-icon",
          style: { color: "#FF4785" },
        },
      ],
    },
    {
      title: "Databases & System Design",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing and optimising relational databases (PostgreSQL, MySQL, Oracle) and non-relational stores (MongoDB, Redis).",
        "⚡ Building event-driven data pipelines using Apache Kafka, RabbitMQ, and AWS SQS for asynchronous inter-service communication.",
        "⚡ Applying system design principles including CAP theorem, eventual consistency, caching strategies, and database indexing.",
        "⚡ Working with ORM/ODM tools such as Prisma, TypeORM, Mongoose, and Sequelize for efficient data access layers.",
      ],
      softwareSkills: [
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql-icon",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos:redis",
          style: { color: "#DC382D" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: { color: "#FFCA28" },
        },
        {
          skillName: "Prisma",
          fontAwesomeClassname: "logos:prisma",
          style: { color: "#2D3748" },
        },
        {
          skillName: "Mongoose",
          fontAwesomeClassname: "simple-icons:mongoosedotws",
          style: { color: "#880000" },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: { color: "#231F20" },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: { color: "#FF6600" },
        },
        {
          skillName: "Elastic Search",
          fontAwesomeClassname: "logos:elasticsearch",
          style: { color: "#005571" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Medium",
      iconifyClassname: "cib:medium",
      style: {
        color: "black",
      },
      profileLink: "https://medium.com/@vaibhavmore24051997",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/mvaibhav131/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/vaibhavmore2018/",
    },
    {
      siteName: "Replit",
      iconifyClassname: "skill-icons:replit-dark",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://replit.com/@VaibhavMore4",
    },
    {
      siteName: "Postman",
      iconifyClassname: "simple-icons:postman",
      style: {
        color: "orange",
      },
      profileLink: "https://www.postman.com/mvaibhav131",
    },
    {
      siteName: "Notion",
      iconifyClassname: "simple-icons:notion",
      style: {
        color: "black",
      },
      profileLink: "https://coderbyte.com/profile/mvaibhav131",
    },
    {
      siteName: "CodeSandBox",
      iconifyClassname: "cib:codesandbox",
      style: {
        color: "green",
      },
      profileLink: "https://codesandbox.io/u/mvaibhav131",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/mvaibhav131",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/mvaibhav131",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@mvaibhav131",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/mvaibhav131",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Savitribai Phule Pune University",
      subtitle: "Bachelor of Engineering",
      logo_path: "sppu_img.png",
      alt_name: "SPPU Pune",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ I have studied core engineering subjects along with specialized courses in software development.",
        "⚡ I have completed courses on Deep Learning, Data Structures & Algorithms (DSA), Docker, Cloud Computing, and Full Stack Development.",
        "⚡ I was awarded a scholarship for being in the top 10% of students in college and received an academic excellence award from a respected MLA.",
      ],
      website_link: "http://www.unipune.ac.in/",
    },
    {
      title: "Maharashtra State Board of Technical Education",
      subtitle: "Diploma in Engineering",
      logo_path: "msbte.png",
      alt_name: "MSBTE",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ I gained foundational knowledge in engineering and problem-solving techniques.",
        "⚡ Apart from core subjects, I explored programming, data structures, and software development concepts.",
        "⚡ I actively participated in technical workshops and hands-on projects that enhanced my analytical and coding skills.",
      ],
      website_link: "https://msbte.org.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   // certificate_link:
    //   //   "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   // certificate_link:
    //   //   "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   // certificate_link:
    //   //   "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    {
      title: "Fullstack Development",
      subtitle: "- Masai School",
      logo_path: "masai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1aEBsZLv6HWkKpuVgrAxdXsyShaGEDGjV/view?usp=sharing",
      alt_name: "masai",
      color_code: "black",
    },
    {
      title: "Dockerization and Containerization",
      subtitle: "- Scalar Academy",
      logo_path: "scalar_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/11Noqko6rh5q9Is9QTBR7IfQKaOpl6L4g/view?usp=sharing",
      alt_name: "scalar",
      color_code: "white",
    },
    {
      title: "Cybersecurity",
      subtitle: "- Network & Internet Security",
      logo_path: "cyber_security_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1bxkPk6aPJPwBD2HZRvzH-73fXSioyeRt/view?usp=sharing",
      alt_name: "cybersecurity",
      color_code: "orange",
    },

    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   // certificate_link:
    //   //   "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   // certificate_link:
    //   //   "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },

    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link: "https://cloud.google.com/",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    // {
    //   title: "Java Basics",
    //   subtitle: "- HackerRank",
    //   logo_path: "hackerrank_logo.png",
    //   certificate_link: "https://www.hackerrank.com/",
    //   alt_name: "hackerrank",
    //   color_code: "green",
    // },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link: "https://cloud.google.com/",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Typing (Golden)",
      subtitle: "- Ratatype",
      logo_path: "ratatype-cloud.webp",
      certificate_link: "https://www.ratatype.com/u5958471/certificate/en/",
      alt_name: "ratatype_logo.png",
      color_code: "silver",
    },
    {
      title: "SSL Domain",
      subtitle: "- GoDaddy",
      logo_path: "GoDaddy-Logo.wine.png",
      certificate_link: "https://www.godaddy.com/en-in",
      alt_name: "godaddy logo",
      color_code: "white",
    },
    {
      title: "Data Structure & Algorithms",
      subtitle: "- Masai School",
      logo_path: "masai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1aEBsZLv6HWkKpuVgrAxdXsyShaGEDGjV/view?usp=sharing",
      alt_name: "masai",
      color_code: "black",
    },
    {
      title: "Software Testing",
      subtitle: "- IJSREM",
      logo_path: "ijsremlogo.webp",
      certificate_link:
        "https://drive.google.com/file/d/1H50K1RMjJ5OZc-3rdFntpOlpRheumni_/view",
      alt_name: "ijsremlogo",
      color_code: "yellow",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Full Stack Senior Software Engineer with hands-on experience building scalable web and mobile applications across startups and product companies. I have worked across the complete stack — from crafting performant React and TypeScript frontends to architecting Node.js microservices deployed on AWS. I thrive in fast-paced environments, take ownership of end-to-end delivery, and enjoy mentoring teams to build better software.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "Kerv Digital",
          company_url: "https://kerv.com/",
          logo_path: "kerv_logo.png",
          duration: "Dec 2025 - Present",
          location: "Pune, Maharashtra",
          description:
            "Designing and developing scalable full-stack applications using React.js, TypeScript, and Vite on the frontend, and Node.js microservices on the backend. Architecting event-driven, serverless solutions leveraging AWS Lambda, API Gateway, SQS, S3, and EC2 to ensure high availability and fault tolerance. Implementing CI/CD pipelines using Atlassian Bamboo for automated build, test, and deployment workflows. Following clean architecture and SOLID principles to maintain loosely coupled, independently deployable services. Conducting code reviews, contributing to system design decisions, and mentoring junior engineers to uphold engineering standards across the team.",
          color: "#0052CC",
        },
        {
          title: "Senior Software Engineer",
          company: "Esyasoft Technologies",
          company_url: "https://www.esyasoft.com/",
          logo_path: "esyasoft_logo.png",
          duration: "June 2023 - Dec 2025",
          location: "Bangalore, Karnataka",
          description:
            "Led end-to-end frontend engineering using React.js, Redux, and SCSS, delivering component-driven UIs integrated with complex backend systems. Built and deployed RESTful Node.js services on AWS (EC2, S3, Lambda), ensuring high performance and cloud reliability. Defined and documented APIs using Swagger/OpenAPI, improving cross-team collaboration and developer experience. Designed and implemented automated testing strategies including unit, integration, and end-to-end tests, significantly reducing release regression cycles. Drove sprint planning, code reviews, and technical mentorship for junior developers, fostering a culture of quality and continuous improvement.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "GrowthPal Technologies",
          company_url: "https://www.growthpal.com/",
          logo_path: "growthpal_logo.jpeg",
          duration: "Oct 2022 - May 2023",
          location: "Pune, Maharashtra",
          description:
            "Developed and maintained full-stack features across a product-focused engineering team. Built RESTful and GraphQL APIs using Node.js and Express.js, deployed on AWS with Kubernetes orchestration for horizontal scaling. Engineered responsive, accessible frontends using React.js, Redux, and SCSS. Implemented comprehensive test coverage using Jest, Mocha, Supertest, and Cypress across unit, integration, and E2E test suites. Collaborated with product managers and designers in an Agile/Scrum environment, consistently delivering features on schedule while maintaining code quality and peer review standards.",
          color: "#9b1578",
        },
        {
          title: "Software Developer",
          company: "Cognizant Technology Solutions",
          company_url: "https://www.cognizant.com/",
          logo_path: "cognizant_logo.jpeg",
          duration: "Feb 2022 - Oct 2022",
          location: "Pune, Maharashtra (Remote)",
          description:
            "Worked as a Software Developer focusing on database design and management for enterprise-scale applications. Wrote complex SQL queries, stored procedures, and optimised data pipelines across relational (Oracle, MySQL) and non-relational (MongoDB) databases. Collaborated with senior engineers to analyse data requirements, improve query performance, and ensure data integrity. Gained exposure to large-scale enterprise software delivery processes, Agile methodologies, and production-grade deployment practices.",
          color: "#fc1f20",
        },
        {
          title: "Full Stack Development Trainee",
          company: "Masai School",
          company_url: "https://www.masaischool.com/",
          logo_path: "masai_logo.png",
          duration: "Feb 2021 - Feb 2022",
          location: "Bangalore, Karnataka (Remote)",
          description:
            "Underwent an intensive, full-time full-stack development programme at Masai School, gaining proficiency in JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB, and RESTful API development. Built and deployed multiple end-to-end web applications, applying agile workflows, Git version control, and peer code reviews. Strengthened core computer science fundamentals including Data Structures and Algorithms (DSA), problem-solving, and system design. The rigorous curriculum and project-based learning provided the technical foundation to transition directly into professional software engineering roles.",
          color: "#ee4b2b",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Technical Engineer",
          company: "Fukoku India Pvt Ltd.",
          company_url:
            "https://www.fukoku-rubber.co.jp/english/product/index.html",
          logo_path: "fukoku_logo.png",
          duration: "May 2017 - Nov 2018",
          location: "Chakan, Maharashtra",
          description:
            "My internship journey further evolved at Fukoku India Pvt Ltd, where I held the position of a Technical Engineer. In this pivotal role, I took on the responsibility of ensuring product quality through meticulous testing and actively contributed to the assembly process. This experience not only heightened my technical acumen but also allowed me to contribute significantly to the operational efficiency and reliability of a diverse range of products.",
          color: "#000000",
        },
        {
          title: "Technical Intern",
          company: "Apurva Automobiles.",
          company_url: "https://jsdl.in/DT-49PH8SVW",
          logo_path: "apurva_logo.jpeg",
          duration: "Nov 2016 - Dec 2016",
          location: "Junnar, Maharashtra",
          description:
            "At Apurva Automobile, my role as a technical intern provided me with hands-on exposure to the intricate world of automotive mechanics. I delved into the diverse components that constitute an automobile and gained expertise in their assembly. This immersive experience equipped me with a practical understanding of the mechanical intricacies driving the automotive industry.",
          color: "#ee3c26",
        },
        {
          title: "Learning Intern",
          company: "Vidyarthi Computers",
          company_url: "https://jsdl.in/DT-49QGCJSJ",
          logo_path: "vidyarthi_logo.png",
          duration: "July 2019 - Dec 2019",
          location: "Junnar, Maharashtra",
          description:
            "During my internship tenure at Vidyathri Computers, I engaged in a valuable learning opportunity by focusing on improving my typing skills. This experience not only enhanced my proficiency in efficient keyboard usage but also laid a foundation for effective communication in the digital realm.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title:
            "Contributor to Academic Research Dissemination: IJESRM Volunteer Project.",
          company: "IJESRM",
          company_url: "https://ijsrem.com/",
          logo_path: "ijsem.png",
          duration: "June 2019 - April 2020",
          location: "pune, Maharashtra",
          description:
            "Embarking on a meaningful volunteering journey, I was fortunate to contribute to a transformative project at IJESRM (International Journal of Engineering Science & Management Research). Within this role, I actively engaged in diverse responsibilities, including research assistance and content curation. Collaborating closely with esteemed professionals in the field, I played a vital part in the publication process, gaining valuable insights into the intricate world of academic research dissemination.",
          color: "#4285F4",
        },
        {
          title:
            "Showcasing Expertise: State Level Technophilia Paper Presentation",
          company: "MSBTE",
          company_url: "https://msbte.org.in/",
          logo_path: "msbte.png",
          duration: "Aug 2014 - May 2015",
          location: "pune, Maharashtra",
          description:
            "Participated in the State Level Technophilia Paper Presentation, where I showcased my research and communication skills through a well-received presentation on engineer project. This experience not only honed my ability to convey complex ideas effectively but also provided me with the opportunity to engage with fellow enthusiasts and experts in the field.",
          color: "#D83B01",
        },
        {
          title:
            "Technical Proficiencies in Action: Volunteering with AutoCAD, ProE, and CATIA",
          company: "Autodesk",
          company_url: "https://www.autodesk.com/",
          logo_path: "Autodesk-logos.webp",
          duration: "Oct 2018 - May 2020",
          location: "Junnar,Maharashtra",
          description:
            "Employing my certified skills in AutoCAD, ProE, and CATIA, I actively volunteered with jaihind College to contribute to design project. My expertise in these software tools enabled me to design the 3d parts, showcasing the practical application of my technical proficiencies for a meaningful cause.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "In my projects, I utilize a broad range of cutting-edge technologies across both frontend and backend development. I specialize in designing, building, and deploying high-performance web and mobile applications, ensuring seamless user experiences and scalable architecture.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name:
        "AI-Driven Music Composition: Exploring Creativity and Collaboration between Humans and Machines.",
      createdAt: "2023-08-26T16:26:54Z",
      description:
        "AI-powered music composition offers a transformative approach to creative expression, providing a platform for collaboration between human emotion and computational innovation. ",
      url:
        "https://drive.google.com/file/d/1GxxjCIbgyJo1evUigJa4kQyy6dRL8xt_/view?usp=drivesdk ",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name:
        "Enhancing Software Testing Efficiency : A Comparative Analysis of Automated Test Case Generation Techniques.",
      createdAt: "2023-08-26T16:26:54Z",
      description:
        "In the pursuit of efficient test case generation, this research provides insights into the strengths and weaknesses of model-based, combinatorial, and random testing techniques. The study aids developers in selecting the appropriate technique based on project demands and priorities. ",
      url:
        "https://drive.google.com/file/d/1H50K1RMjJ5OZc-3rdFntpOlpRheumni_/view?usp=drivesdk ",
    },
  ],
};

// Stub sections for containers (add your data here to populate these pages)
const achievementSection = {
  title: "Achievements",
  subtitle: "Accomplishments, certifications and recognitions.",
  achivementsCards: [] as Array<{
    title: string;
    subtitle: string;
    image: string;
    footerLink: Array<{ name: string; url: string }>;
  }>,
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "I write about full-stack development, cloud architecture, and the engineering decisions behind building scalable systems.",
  blogs: [] as Array<{
    url: string;
    image: string;
    title: string;
    description: string;
  }>,
};

const talkSection = {
  title: "Talks",
  subtitle: "Talks and presentations I have given.",
  talks: [] as Array<{
    title: string;
    subtitle: string;
    slides_url: string;
    event_url: string;
    image: string;
  }>,
};

const podcastSection = {
  title: "Podcast",
  subtitle: "I love to talk about technology and development.",
  podcast: [] as string[],
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some startups and companies that I helped create their tech.",
  projects: [] as Array<{ image: string; link: string }>,
};

const openSource = {
  githubConvertedToken: "",
  githubUserName: "VaibhavSanjayMore",
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "",
  email_address: "vaibhavmore24051997@gmail.com",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vaibhavmore_hd.png",
    description:
      "I'm always open to discussing new opportunities, interesting projects, or just a good tech conversation. Whether you have a question, want to collaborate, or simply want to say hi — feel free to reach out. I typically respond within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I write about full-stack development, cloud architecture, and the engineering decisions behind building scalable systems. My goal is to share practical insights that help developers level up in their craft.",
    link: "https://medium.com/@vaibhavmore24051997/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Pune, Maharashtra, India",
    locality: "Pune",
    country: "IN",
    region: "Maharashtra",
    postalCode: "411001",
    streetAddress: "Pune",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Pune,Maharashtra,India",
  },
  phoneSection: {
    title: "Email",
    subtitle: "vaibhavmore24051997@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  bigProjects,
  openSource,
  contactInfo,
};
