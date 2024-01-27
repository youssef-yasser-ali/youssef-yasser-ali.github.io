import { aromaPro, clickAndGitPro, forkifyPro, talk2InsPro } from "../assets";

export const data = {
  name: "Youssef Yasser A.",
  title: "Software Engineering.",
  description: ` I’m a software engineer especially a web developer with a strong
  passion for the fields of artificial intelligence and machine
  learning.`,
};

export const technologes = [
  "Python",
  "C",
  "JavaScript (ES6+)",
  "React",
  "Git",
  "MySQl",
];

export const projects = [
  {
    name: "Click & Get",
    description: `Click and Get is a simple web application and React ecommerce platform with essential commerce features. Built with React.`,
    image: clickAndGitPro,
    technologies: [
      "React",
      "React Router",
      "Redux",
      "React Thunk",
      "boatstrap",
    ],
    links: { github: "https://github.com/youssef-yasser-ali/click-and-get" },
  },

  {
    name: "Talk2Insights",
    description: (
      <p>
        a web application that enables users to convert spoken audio into text,
        summarize the content, and analyze the sentiment of the conversation.
        <br /> This project aims to provide valuable insights from audio
        content, which can be useful for various applications such as customer
        service analysis, content transcription, and more.
      </p>
    ),
    image: talk2InsPro,

    technologies: ["React", "React Router", "Flask", "Hugging Face"],
    links: { github: "https://github.com/youssef-yasser-ali/click-and-get" },
  },
  {
    name: "Forkify",
    description: (
      <p>
        a JavaScript application that interacts with the Forkify API to fetch
        and display recipe food data. This app uses modern JavaScript tools,
        such as parcel to bundle the modules , user can search for a specific
        recipe, and save to a favorites list via local storage , easily increase
        or decrease servings as per his need and can view detailed directions.
      </p>
    ),
    image: forkifyPro,
    technologies: ["Javascript", "SCSS", "Parcel", "MVC"],
    links: {
      external: "https://forkify-youssef.netlify.app/",
      github: "https://github.com/youssef-yasser-ali/Forkify",
    },
  },
  // {
  //   name: "Aroma",
  //   description: (
  //     <p>
  //       a shopping website template are very many. From cool hover effects and
  //       sticky navbar to multiple shop pages and blog, it is all available for
  //       use. Besides, Aroma also comes with login, register and tracking pages
  //     </p>
  //   ),
  //   image: "/src/assets/Projects-img/aroma-demo.jpeg",
  //   technologies: ["HML", "CSS", "Javascript"],
  //   links: {
  //     external: "https://aroma-youssef.netlify.app/",
  //     github: "https://github.com/youssef-yasser-ali/click-and-get",
  //   },
  // },
];

// other prjects

export const otherProjects = [
  {
    name: "Aroma",
    description: (
      <p>
        a shopping website template are very many. From cool hover effects and
        sticky navbar to multiple shop pages and blog, it is all available for
        use. Besides.
      </p>
    ),
    image: aromaPro,
    technologies: ["HML", "CSS", "Javascript"],
    links: {
      external: "https://aroma-youssef.netlify.app/",
      github: "https://github.com/youssef-yasser-ali/click-and-get",
    },
  },
  {
    name: "Mapty",
    description: (
      <p>
        Mapty is a simple web application that allows users to log their
        workouts on a map. Built with JavaScript.
      </p>
    ),
    technologies: ["Javascript", "SCSS", "Parcel", "MVC"],
    links: {
      external: "https://mapty-youssef.netlify.app/",
      github: "https://github.com/youssef-yasser-ali/Mapty",
    },
  },
  {
    name: "Chatbot",
    description: (
      <p>
        a chatbot project that uses the OpenAI API to generate responses to user
        input. The chatbot is built using HTML, CSS, and JavaScript, and is
        designed to be run in a web browser.
      </p>
    ),
    image: "/src/assets/Projects-img/bankist-demo.jpg",
    technologies: ["HTML", "CSS", "Javascript", "OpenAI API"],
    links: {
      github: "https://github.com/youssef-yasser-ali/chat-bot",
    },
  },
];

export const socialMediaData = [
  {
    title: "GitHub",
    link: "https://github.com/youssef-yasser-ali",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-github"
      >
        <title>GitHub</title>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/youssef-yasser-ali/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>LinkedIn</title>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/YousefYaserAli",
    svg: (
      <svg
        style={{ width: 23 }}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        strokeWidth="2"
        role="img"
        version="1.1"
        viewBox="4 -1.2 48.605 48.605"
      >
        <title>facebook</title>

        <path d="M34.094,8.688h4.756V0.005h-8.643c-0.721-0.03-9.51-0.198-11.788,8.489c-0.033,0.091-0.761,2.157-0.761,6.983l-7.903,0.024   v9.107l7.913-0.023v24.021h12.087v-24h8v-9.131h-8v-2.873C29.755,10.816,30.508,8.688,34.094,8.688z M35.755,17.474v5.131h-8v24   h-8.087V22.579l-7.913,0.023v-5.107l7.934-0.023l-0.021-1.017c-0.104-5.112,0.625-7.262,0.658-7.365   c1.966-7.482,9.473-7.106,9.795-7.086l6.729,0.002v4.683h-2.756c-4.673,0-6.338,3.054-6.338,5.912v4.873L35.755,17.474   L35.755,17.474z" />
      </svg>
    ),
  },
  {
    title: "Twitter",
    link: "https://twitter.com/Us_Ef_",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-twitter"
      >
        <title>Twitter</title>
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    ),
  },
];

export const jobDetails = {
  jobs: [
    {
      jobTitle: "Data Scientist Supervisor",
      company: "Cat-Reloaded",
      companyUrl: "https://catreloaded.org/",

      startDate: "Nov 2022 ",
      endDate: "Present",
      responsibilities: [
        "Guide and mentor colleagues in their data science learning journey within the team.",
        "Assign technical tasks, conduct thorough reviews, and provide constructive feedback to team members.",
        "Collaborate with the team to develop and implement data science projects.",
      ],
    },
    {
      jobTitle: "Software Engineer",
      company: "Alx Africa",
      companyUrl: "https://www.alxafrica.com/",
      startDate: "Jan 2023",
      endDate: "Mar 2023 ",
      responsibilities: [
        "Applied software engineering best practices and followed coding standards to ensure maintainability and readability of the codebase",
        "Proficiently worked with Linux and actively engaged in learning and implementing the C programming language, Git, and GitHub.",
        "Collaborated closely with team members to conduct code reviews, providing constructive feedback, and fostering a collaborative development environment",
      ],
    },
    {
      jobTitle: "Data Scientist Intern",
      company: "Sparks Foundation",
      companyUrl: "https://www.thesparksfoundationsingapore.org/",

      startDate: "Nov 2022",
      endDate: " Dec 2022",
      responsibilities: [
        "Utilized skills in Python, Machine Learning, and Data Science to successfully execute assigned tasks",
        "Executed end-to-end project lifecycles, implementing Supervised and Unsupervised Machine Learning algorithms such as Linear Regression, Decision Tree, K-Means Clustering, etc.",
      ],
    },
    {
      jobTitle: "Artificial Intelligence Intern",
      company: "ITIDA",
      companyUrl: "https://www.itida.gov.eg/",
      startDate: "Aug 2022 ",
      endDate: "Sep 2022",

      responsibilities: [
        "(120 hours) on Artificial Intelligence (AI) presented by the National Telecommunication Institute (NTI) and Information Technology Industry Development Agency, ITIDA",
        "Overview of AI and machine learning algorithms",
        "Build a project using AI and machine learning algorithms",
        "Overview of Deep Learing and TensorFlow programming for image recognition, speech recognition, and human-machine dialogue",
        "Learn a General Soft skills : Communication skills, Team Wrok and Leadership skills",
      ],
    },
  ],
};
