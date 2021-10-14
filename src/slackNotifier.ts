class slackNotifier {
  postUrl: string;
  username: string;

  constructor(url: string, name: string) {
    this.postUrl = url;
    this.username = name;
  }

  postToSlack(message: string): void {
    const jsonData =
    {
      "username" : this.username,
      "text" : message
    };
    const payload = JSON.stringify(jsonData);

    const options =
    {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : payload
    };

    UrlFetchApp.fetch(this.postUrl, options);
  }
}