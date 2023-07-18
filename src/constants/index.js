import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    IBM,
    ICIP,
    JPMC,
    testdome,
    cisco,
    noarchie,
    threejs,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Computer Networks",
        icon: web,
    },
    {
        title: "Penetration Testing",
        icon: mobile,
    },
    {
        title: "DBMS",
        icon: backend,
    },
    {
        title: "Web Development",
        icon: creator,
    },
];

const technologies = [{
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [{
        title: "IBM Cybersecurity Analyst",
        company_name: "IBM",
        icon: IBM,
        iconBg: "#383E56",
        date: "April 30, 2023",
        points: [
            "In this Professional Certificate, learners developed and honed essential knowledge and skills to enter today's dynamic cybersecurity workforce.",
            "This certificate consisted of 8 other certificate courses:",
            "Cybersecurity Roles, Processes & Operating System Security",
            "Cybersecurity Capstone: Breach Response Case Studies",
            "Penetration Testing, Incident Response and Forensics",
            "Network Security & Database Vulnerabilities",
            "Cybersecurity Compliance Framework & System Administration",
            "Introduction to Cybersecurity Tools & Cyber Attacks",
            "IBM Cybersecurity Analyst Assessment",
            "Cyber Threat Intelligence",
        ],
    },
    {
        title: "Software Engineering",
        company_name: "JPMorgan Chase & Co.",
        icon: JPMC,
        iconBg: "#E6DEDD",
        date: "June 2023",
        points: [
            "Interface with a stock price data feed",
            "Use JPMorgan Chase & Co. frameworks and tools",
            "Display data visually for traders",
        ],
    },
    {
        title: "NDG LINUX ESSENTIALS",
        company_name: "CISCO NETWORKING ACADEMY ",
        icon: cisco,
        iconBg: "#F3F3F3",
        date: "July 9, 2023",
        points: [
            "This course is the perfect next step for beginners looking to expand their skills and knowledge of Linux.",
            "This certification level series offers beginners more rigorous in-depth coverage.",
            "The NDG Introduction to Linux I and NDG Introduction to Linux II courses focus on the basic Linux system administration skills needed in preparation for the Linux Professional Institute LPIC-1 certification.",
        ],
    },
    {
        title: "Introduction to CIP",
        company_name: "OPSWAT ACADEMY",
        icon: ICIP,
        iconBg: "#E6DEDD",
        date: "July 7, 2023",
        points: [
            "Fundamentals of CIP ",
            "Fundamentals of CIS ",
            "Certification Exam on the Introduction to CIP",
        ],
    },
    {
        title: "CORE JAVA",
        company_name: "TESTDOME",
        icon: testdome,
        iconBg: "#E6DEDD",
        date: "July 12, 2023",
        points: [
            "TestDome is a provider of high-quality, online skills tests that use work-sample testing methodology to screen knowledge workers. Candidates are evaluated through small samples of actual work that show how they solve problems in the real world ",
        ],
    },
];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [{
    name: "No Archie",
    description: "NoArchi is a new generation web application which is open to all and it enables both the customer and the designers to build there own personal building designs and even customize there rooms and homes",
    tags: [{
            name: "JavaScript",
            color: "blue-text-gradient",
        },
        {
            name: "CSS",
            color: "green-text-gradient",
        },
        {
            name: "HTML",
            color: "pink-text-gradient",
        },
        {
            name: "tailwind css",
            color: "pink-text-gradient",
        },
        {
            name: "React",
            color: "pink-text-gradient",
        },
    ],
    image: noarchie,
    source_code_link: "https://github.com/World-Of-Gods/NoArchi-custom-room.git",
}, ];
//     {
//         name: "Job IT",
//         description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//         tags: [{
//                 name: "react",
//                 color: "blue-text-gradient",
//             },
//             {
//                 name: "restapi",
//                 color: "green-text-gradient",
//             },
//             {
//                 name: "scss",
//                 color: "pink-text-gradient",
//             },
//         ],
//         image: jobit,
//         source_code_link: "https://github.com/",
//     },
//     {
//         name: "Trip Guide",
//         description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//         tags: [{
//                 name: "nextjs",
//                 color: "blue-text-gradient",
//             },
//             {
//                 name: "supabase",
//                 color: "green-text-gradient",
//             },
//             {
//                 name: "css",
//                 color: "pink-text-gradient",
//             },
//         ],
//         image: tripguide,
//         source_code_link: "https://github.com/",
//     },
// ];

export { services, technologies, experiences, testimonials, projects };