import okta from '@okta/okta-sdk-nodejs'
export const client = new okta.Client({
    orgUrl: 'https://dev-07311230.okta.com',
    token: '00QGYgsSiKFpc2JwQSUAzp4zctZJZtRv7kr9y-aWXK',
    clientId:'0oa4dqwgfpRRkTnqj5d7'// Obtained from Developer Dashboard
});

