const low = require('lowdb');
const bodyParser = require('body-parser');
const uuid = require('uuid');

function setupDb() {
  const db = low();

  db.defaults({ topics: [], links: [] })
    .value();

  const topic1 = {
    name: 'About',
    description: 'links to useful open source libraries',
  };

  const topic2 = {
    name: 'Projects',
    description: 'links to new and exciting apps',
  };

  const topic3 = {
    name: 'Experience',
    description: 'links to useful open source libraries',
  };

  const topic4 = {
    name: 'Education',
    description: 'links to programming related news articles',
  };

  // const topic5 = {
  //   name: 'Contact',
  //   description: 'links to programming related news articles',
  // };

  db.get('topics').push(topic1).value();
  db.get('topics').push(topic2).value();
  db.get('topics').push(topic3).value();
  db.get('topics').push(topic4).value();
  //db.get('topics').push(topic5).value();

  db.get('links').push({
    description: 'I am a computer science graduate student having 4 years of academic experience & \
    2 years of work experience in software development, I am an avid learner and an enthusiastic developer \
    with experience in Web/Mobile Application Development, Hadoop, MapReduce, & Apache Spark!. \
    Also gained hands-on experience in Data Analysis and Machine Learning. I believe \
    syncing work cognitively and physically will expand the idea of "success" immensely.',
    topicName: topic1.name,
    showFlashCard: true,
    id: uuid(),
  }).value();

  // db.get('links').push({
  //   description: 'Networking application which aims at controlling the network traffic by defining and controlling the network functionality - based on the information gathered using Deep Packet Inspection.',
  //   title: 'Online Food Order System',
  //   // category: 'android/web',
  //   category: 'software networks',
  //   url: 'https://github.com/Meghu2793/Data-Analysis-on-PIMA-Indian-Diabetes-Database',
  //   topicName: topic2.name,
  //   id: uuid(),
  // }).value();

  db.get('links').push({
    description: 'Developed a web-based application called “Developers Platform”, a social \
    media application for developers. ReactJS with Redux is used in front-end development and Node.JS \
    Express framework is used for server side.',
    title: 'Developers Platform',
    //url: 'https://github.com/Meghu2793',
    category: 'android/web',
    topicName: topic2.name,
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'A social networking android app where a user could make friends and post messages. \
    Implemented Firebase Auth and Google Sign in for users to Login from any device and Firebase Real-time database to store all logged-in users. \
    Used Firebase Cloud Storage to store all the user profile pictures. Managing the user profile by allowing the user to update the profile anywhere. \
    Implemented Friends module same as Facebook Friend Module.',
    title: 'Friend Me!',
    category: 'android/web',
    topicName: topic2.name,
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'A social media web application to post their experience and feedback on different campgrounds they visit by adding photos and comments on it which would be visible to rest other users who can also comment on top of it, sharing each other’s experience. \
    Implemented Google sign-in using OAuth allowing the user to access their Home page from any user device. \
    NodeJS is used in the backend with Express framework and mongoose to access MongoDB database.',
    title: 'Camping',
    url: 'https://github.com/Meghu2793/Camping',
    category: 'android/web',
    topicName: topic2.name,
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'Data analysis techniques to create visualizations and interpret models to uncover the reason for high diabetic outcome amongst the PIMA Indian Pregnant women. \
      The project covered domain understanding, data preparation, Exploratory data analysis (EDA), statistical analysis, modelling, evaluation and finding unique patterns of the data in R.',
    title: 'Data Analysis on Healthcare Database',
    url: 'https://github.com/Meghu2793/Data-Analysis-on-PIMA-Indian-Diabetes-Database',
    category: 'Data science',
    topicName: topic2.name,
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'Predict Labor Condition Approval using the USCIS and Department of Labor dataset from 2011 - 2016 consisted of 3 million records. \
    Analyzed, extracted, cleaned and preprocessed the data and implemented own Logistic Regression classifier in PySpark to predict LCA decision with 75.27% accuracy.\
    Developed statistical model to predict the future data related jobs’ LCAs using Multiple Linear Regression in spark.',
    title: 'LCA (Labor Condition Approval) Decision Prediction using Spark',
    topicName: topic2.name,
    category: 'Data science',
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'This project centred on predicting the sentiment of tweets (twitter csv data set) by using CART model with an accuracy of 88.4% accuracy and Random Forest with 84.5% accuracy.',
    title: 'Sentimental Analysis on Twitter',
    url: 'https://github.com/Meghu2793/TextAnalytics',
    topicName: topic2.name,
    category: 'Data science',
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'A Hadoop MapReduce Application which aims at computing PageRank on set of pre-processed version of Wikipedia \
    corpus composed of 200,000 files by involving several different MapReduce passes used sequentially to Create a Link Graph, Process PageRank, Cleanup and Sorting which ultimately results the page-rank of all Wikipedia pages.',
    title: 'Google’s PageRank Implementation on Wikipedia Document',
    url: 'https://github.com/Meghu2793/PageRank',
    topicName: topic2.name,
    category: 'Data science',
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'Predicting whether the email is responsive to the given Energy bids query or not. CART model is used for the analysis and data is extracted from “2010 TREC Legal Track” which contains emails as observations.',
    title: 'Email Categorization',
    url: 'https://github.com/Meghu2793/TextAnalytics',
    topicName: topic2.name,
    category: 'Data science',
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'Recommending similar movies to the respected users based on similar genre. Hierarchical clustering is performed to cluster the movies of same genre.',
    title: 'Data Analysis on Netflix Movie Recommendation',
    url: 'https://github.com/Meghu2793/TextAnalytics',
    topicName: topic2.name,
    category: 'Data science',
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'Networking application which aims at controlling the network traffic by defining and controlling the network functionality - based on the information gathered using Deep Packet Inspection.',
    title: 'Quality Of service using SDN',
    url: 'https://github.com/Meghu2793/SoftwareDefinedNetwork',
    category: 'Networking',
    topicName: topic2.name,
    id: uuid(),
  }).value();

  db.get('links').push({
    description: ' ➤ Designed and developed RESTful APIs in ASP.Net Web API framework with MSSQL database in \
    the back-end for DEKA Employee directory and Indoor Maps application. \
    ➤ Worked on Dashboards and Search Tool application in Antlr4.0, JavaScript, and HTML5.',
    title: 'Deka Research: Software Engineer Intern',
    topicName: topic3.name,
    showFlashCard: true,
    id: uuid(),
  }).value();

  db.get('links').push({
    description: '➤ Developed RESTful back-end services for a sports analytics application using Node-Express \
    web framework for Twitter-live streaming, the daily scoreboard of NBA, NFL sports. MySQL database is used in the back-end. \
    ➤ Full stack development of website’s header using React-Router, React-Parallax, React-Bootstrap.\
    React-Axios npm module is used for ajax call in front-end. Passport.js is an authentication middleware used for Sign up and Login. \
    Nginx is used as a cache to serve the static HTML pages to improve the performance.',
    title: 'ProLytics: Software Developer Intern',
    topicName: topic3.name,
    showFlashCard: true,
    id: uuid(),
  }).value();

  db.get('links').push({
    description: '➤ Authored an efficient UI framework consisting of themes and UI Components using Bootstrap and CSS which was used by UI developers across bank with all the portals being developed. The framework was built to be responsive across all the browsers. \
    ➤ Developed dynamic and responsive web pages using HTML5, CSS3, Bootstrap, Ajax, JQuery, JavaScript & Angular JS. \
    ➤ Worked on REST API design and implementation which fetched data from a relational database.',
    title: 'Societe Generale: Software Engineer',
    topicName: topic3.name,
    showFlashCard: true,
    id: uuid(),
  }).value();

  db.get('links').push({
    description: '➤ Designed and maintained MySQL database & developed NodeJS scripts to leverage the Library data from 3rd party APIs (OCLC).\
    ➤ Worked on ex-libris apis for managing library inventory and bibliographic records.',
    title: 'Developer Intern: University of North Carolina',
    topicName: topic3.name,
    showFlashCard: true,
    id: uuid(),
  }).value();


  db.get('links').push({
    description: 'Proficient in Algorithms and Data Structures which refined my problem-solving approach.\
    Followed Agile methodology for the development of multiple Mobile & Web Applications.\
    Specialized in the field of Data Science and Application development. Gained hands-on experience in Mobile app development, Hadoop MapReduce, Apache Spark and Machine Learning.\
    The range of projects I have worked on instilled the confidence to take up bigger challenges and come up with effective solutions.\
    \
    GPA: 4.0 / 4.0. \
    Course Work:\
    First semester:\
    ♦ Algorithms and Data structures\
    ♦ Software System and Design Implementation\
    ♦ Knowledge Discovery in Database Systems\
    \
    Second semester:\
    ♦ Mobile Application Development\
    ♦ Cloud Computing\
    ♦ Machine Learning\
    \
    Third Semester:\
    ♦ Database Systems\
    ♦ Network-Based Application development\
    ♦ Survey of Programming languages',
    title: 'Master of Science in Computer Science (Jan 2017 - Dec 2018)',
    url: 'https://www.uncc.edu/',
    topicName: topic4.name,
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'Courses Completed: \
    Database Systems, Java, Object Oriented Programming (OOP), Software Engineering, Data Structures, Computer Networks, Web application development.\
    GPA: 8.72 / 10.00.',
    title: 'Bachelors in Computer Science and Engineering (Sep 2011 - Jun 2015)',
    url: 'http://www.sit.ac.in/',
    topicName: topic4.name,
    id: uuid(),
  }).value();
  
  db.get('links').push({
    description: 'Courses Completed: \
    Physics, Chemistry, Maths, Biology',
    title: 'Higher Secondary Education (Jun 2009 - May 2011)',
    topicName: topic4.name,
    id: uuid(),
  }).value();

  return db;
}

module.exports = (app) => {
  const db = setupDb();

  app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    // Pass to next layer of middleware
    next();
  });

  app.use(bodyParser.json());

  app.get('/api/topics', (req, res) => {
    res.send(db.get('topics').toArray().value());
  });

  app.get('/api/topics/:name/links', (req, res) => {
    const links = db.get('links').filter((l) =>
      l.topicName === req.params.name
    ).value();
    res.send(links);
  });

  app.post('/api/topics/:name/links', (req, res) => {
    const existingLink = db.get('links').find({ url: req.body.url }).value();
    if (existingLink) {
      return res.send(403);
    }

    const link = Object.assign({}, req.body, {
      id: uuid(),
    });
    db.get('links').push(link).value();
    return res.send(link);
  });
};
