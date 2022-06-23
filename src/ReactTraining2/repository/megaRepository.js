readOnlyUrl: readOnlyBackUrl;
backurl: educationBackUrl;

axios.post
  .back1({
    method: "get",
    url: "url",
    responseType: "type",
  })
  .then(function (response) {
    // response Action
  });

axios.get
  .back({
    method: "post",
    url: "url",
    responseType: "type",
  })
  .then(function (response) {});
