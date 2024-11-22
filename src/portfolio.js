/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnime"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "An Phuoc",
  title: "Hi there, I'm Phuoc!",
  subTitle: emoji(
    "A passionate Back-End Software Developer👀 with experience in building robust and scalable website and desktop applications using Java, C#, Spring Boot, .NET Framework, and other cutting-edge libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ad_jgBVLmxk7aaUP33C0uAJv94ujILMg/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AnPhuoc2410",
  gmail: "anphuocdao2410@gmail.com",
  facebook: "https://www.facebook.com/anphuocdao2410",
  instagram: "https://www.instagram.com/anphuocdao2410",
  twitter: "https://twitter.com/AnPhuoc2410",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Here What I Do",
  subTitle: "BACK-END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH",
  skills: [
    emoji(
      "⚡ Developing highly efficient server-side logic and database management systems"
    ),
    emoji("⚡ Implementing RESTful APIs and microservices architecture"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Redis / Azure / Docker"
    ),
    emoji(
      "⚡ Developing and maintaining scalable and secure systems using Spring Boot / .NET Core"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "React",
    logo: "https://skillicons.dev/icons?i=react&theme=dark"
  },
  {
    skillName: "Bootstrap",
    logo: "https://skillicons.dev/icons?i=bootstrap&theme=dark"
  },
  {
    skillName: "HTML",
    logo: "https://skillicons.dev/icons?i=html&theme=dark"
  },
  {
    skillName: "CSS",
    logo: "https://skillicons.dev/icons?i=css&theme=dark"
  },
  {
    skillName: "JavaScript",
    logo: "https://skillicons.dev/icons?i=js&theme=dark"
  },
  {
    skillName: "MongoDB",
    logo: "https://skillicons.dev/icons?i=mongodb&theme=dark"
  },
  {
    skillName: "MySQL",
    logo: "https://skillicons.dev/icons?i=mysql&theme=dark"
  },
  {
    skillName: "Azure",
    logo: "https://skillicons.dev/icons?i=azure&theme=dark"
  },
  {
    skillName: "Docker",
    logo: "https://skillicons.dev/icons?i=docker&theme=dark"
  },
  {
    skillName: "Spring",
    logo: "https://skillicons.dev/icons?i=spring&theme=dark"
  },
  {
    skillName: "Java",
    logo: "https://skillicons.dev/icons?i=java&theme=dark"
  },
  {
    skillName: ".NET",
    logo: "https://skillicons.dev/icons?i=dotnet&theme=dark"
  },
  {
    skillName: "C#",
    logo: "https://skillicons.dev/icons?i=cs&theme=dark"
  },
  {
    skillName: "C++",
    logo: "https://skillicons.dev/icons?i=cpp&theme=dark"
  },
  {
    skillName: "Firebase",
    logo: "https://skillicons.dev/icons?i=firebase&theme=dark"
  },
  {
    skillName: "Redis",
    logo: "https://skillicons.dev/icons?i=redis&theme=dark"
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "FPT University",
      logo: require("./assets/images/FPT_University.jpg"),
      subHeader: "Bachelor of Engineering in Software Engineering",
      duration: "September 2022 - April 2026",
      desc: "Top100 Student in Summer 2024.",
      descBullets: [
        "VVV",
        "VVV"
      ]
    },
    {
      schoolName: "Binh Long High School for the Gifted.",
      logo: require("./assets/images/Chuyen_BinhLong.jpg"),
      subHeader: "Physics - Chemistry",
      duration: "September 2019 - April 2022",
      desc: "THEM SAU",
      descBullets: ["Vv,Vvm,...."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND PROJECT THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/KoiCareLogo.png"),
      projectName: "Koi Care System",
      projectDesc: "The Koi Care System Web is an innovative platform designed to simplify and enhance the management of koi ponds and koi fish.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://koi-care-system.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "VN:(+84) 918 834 114",
  email_address: "anphuocdao2410@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
