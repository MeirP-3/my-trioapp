// Client Side State of the store
// Kind of caching...
let emails = [];

const getEmails = () => {
  return new Promise(resolve => {
    // simple caching mechanism
    if (emails.length) {
      resolve(emails);
    }
    else {
      setTimeout(() => {
        emails = generateEmails();
        resolve(emails);
      }, 500);
    }
  });
}

function getEmailById(emailId) {
  return getEmails().then(emails => {
    const email = email.find(email => emailId === email.id);
    return email;
  });
}

function deleteEmail(email) {
  var idx = emails.indexOf(email)
  emails.splice(idx, 1);
}

function getNext(email) {
    // select next in a cyclic way
    var idx = emails.indexOf(email);
    return (idx < emails.length-1)?  
          emails[idx+1] : emails[0];
}

function sendEmail(email) {
  var idx = emails.findIndex(currEmail => currEmail.id === email.id)
  if (idx > -1) {
    emails.splice(idx, 1, email);
  } else {
    emails.push(email);
  }
}

// Used to create local data with no AJAX
function generateEmails() {
  const emailIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return emailIds.map(generateEmail);
}

function generateEmail(id) {
  let d = new Date();
  let time = d.getDate() + '/' + d.getMonth() + '  ' + d.getHours() + ':' +
  d.getMinutes() + ':' + d.getSeconds() ;
  return {
    id,
    from: 'jon duo',
    to: 'foo bar',
    time: time,
    subject: `subject of mail ${id}`,
    body: `${id} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, praesentium, nobis repellat perspiciatis quidem ex voluptatem eaque magni hic. Reprehenderit architecto, inventore dolore dicta. Possimus praesentium est quaerat ducimus nam.`,
    isRead: false
  }
}

export default {
  getEmails,
  deleteEmail,
  getNext,
  sendEmail
}
// function getProductsFromGenericAPI() {
//   const params = {
//     rows:       10,
//     id:        '{index}',
//     price:     '{number|1000}',
//     title: '{lorem|2}',
//     description: '{lorem|10}',
//     pretty: true
//   }

//   return $.getJSON('http://www.filltext.com', params);

// }
