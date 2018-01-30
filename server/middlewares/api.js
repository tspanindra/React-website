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
    name: 'Education',
    description: 'links to programming related news articles',
  };

  const topic4 = {
    name: 'Contact',
    description: 'links to programming related news articles',
  };


  db.get('topics').push(topic1).value();
  db.get('topics').push(topic2).value();
  db.get('topics').push(topic3).value();
  db.get('topics').push(topic4).value();

  db.get('links').push({
    description: 'The very library we are working with now',
    url: 'https://github.com/facebook/react',
    topicName: topic1.name,
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'Some old videos',
    url: 'http://tagtree.io',
    topicName: topic1.name,
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'Networking application which aims at controlling the network traffic by defining and controlling the network functionality - based on the information gathered using Deep Packet Inspection.',
    title: 'Online Food Order System',
    url: 'https://github.com/Meghu2793/Data-Analysis-on-PIMA-Indian-Diabetes-Database',
    topicName: topic2.name,
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'This project centred on predicting the sentiment of tweets (twitter csv data set) by using CART model with an accuracy of 88.4% accuracy and Random Forest with 84.5% accuracy.',
    title: 'Sentimental Analysis on Twitter',
    url: 'https://github.com/Meghu2793/TextAnalytics',
    topicName: topic2.name,
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'Predicting whether the email is responsive to the given Energy bids query or not. CART model is used for the analysis and data is extracted from “2010 TREC Legal Track” which contains emails as observations.',
    title: 'Email Categorization',
    url: 'https://github.com/Meghu2793/TextAnalytics',
    topicName: topic2.name,
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'Recommending similar movies to the respected users based on similar genre. Hierarchical clustering is performed to cluster the movies of same genre.',
    title: 'Data Analysis on Netflix Movie Recommendation',
    url: 'https://github.com/Meghu2793/TextAnalytics',
    topicName: topic2.name,
    id: uuid(),
  }).value();

  db.get('links').push({
    description: 'Networking application which aims at controlling the network traffic by defining and controlling the network functionality - based on the information gathered using Deep Packet Inspection.',
    title: 'Quality Of service using SDN',
    url: 'https://github.com/Meghu2793/SoftwareDefinedNetwork',
    topicName: topic2.name,
    id: uuid(),
  }).value();


  db.get('links').push({
    description: 'Go find some news yourself!',
    title: 'Go find some news yourself!',
    url: 'https://google.com',
    topicName: topic3.name,
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
