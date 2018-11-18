const ec2 = require('ec2-publicip');

export function createLink({ topicName, url, description }) {
  return ec2.getPublicIP((error, ip) => {
    if (error) {
      console.log(error);
    }
    return fetch(`http://${ip}/api/topics/${topicName}/links`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url,
        description,
        topicName,
      }),
    }).then(response => response.json());
  });
}
