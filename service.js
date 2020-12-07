const OracleBot = require('@oracle/bots-node-sdk');
const { WebhookClient, WebhookEvent } = OracleBot.Middleware;

module.exports = (app) => {
  const logger = console;
  OracleBot.init(app, { logger });

  const webhook = new WebhookClient({
    channel: {
      url: process.env.BOT_WEBHOOK_URL,
      secret: process.env.BOT_WEBHOOK_SECRET,
    }
  });

  webhook
    .on(WebhookEvent.ERROR, err => logger.error('Error: ', err.message))
    .on(WebhookEvent.MESSAGE_SENT, message => logger.info('Message to Bot: ', message))
    .on(WebhookEvent.MESSAGE_RECEIVED, message => {
      logger.info('Message from Bot: ', message);
    });
  
  app.post('/bot/receive', webhook.receiver());

  app.post('/bot/send', (req, res) => {
    const { user, text } = req.body;
    const MessageModel = webhook.MessageModel();
    const message = {
      userId: user,
      messagePayload: MessageModel.textConversationMessage(text),
    };
    webhook
      .send(message)
      .then(
        () => res.send('OK'),
        e => res.status(400).end(e.message)
      );
  });
};