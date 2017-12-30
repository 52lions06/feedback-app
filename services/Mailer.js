const sendgrid = require('sendgrid');
const keys = require('../config/keys');
const helper = sendgrid.mail;

class Mailer extends helper.Mail{
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email('no-reply@emailmagic.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent( this.body );
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses( recipients ) {
    return recipients.map(({ email }) => {
      return new helper.Email( email );
    });
  }

// not a lot of info on what is happening, but this is how sendGrid operates
  addClickTracking(){
    const trackSettings = new helper.TrackSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackSettings.setClickTracking ( clickTracking );
    this.addTrackingSettings ( trackSettings );
  }

  addRecipients(){
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
      personalize.addTo( recipient );
    });
    this.addPersonalization( personalize );
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    })

    const response = this.sgApi.API( request );
    return response;
  }

}

module.exports = Mailer ; 

//not sure to why async send is saything there is a parsing error