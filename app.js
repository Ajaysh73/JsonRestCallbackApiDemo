document.querySelector("#getButton").addEventListener("click", getData);
document.querySelector("#postButton").addEventListener("click", postData);
document.querySelector("#putButton").addEventListener("click", putData);
document.querySelector("#deleteButton").addEventListener("click", deleteData);
function getData() {
  // Make a Http GET request
  const http = new easyHTTP();
  http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
    if (err) {
      document.getElementById("getDiv").innerHTML = err;
      // console.log(err);
    } else {
      // posts += "<h4> Top 100 Posts</h4>";
      document.getElementById("displayDiv").innerHTML =
        "<h5> Top 100 Posts</h5>" + posts;
      //console.log(posts);
    }
  });
}

// Create Data
let data = {
  title: "Custom Post",
  body: "This is a custom post"
};

function postData() {
  const http = new easyHTTP();
  //Make a http POST request
  http.post("https://jsonplaceholder.typicode.com/posts", data, function(
    err,
    post
  ) {
    if (err) {
      document.getElementById("displayDiv").innerHTML = err;
      // console.log(err);
    } else {
      document.getElementById("displayDiv").innerHTML =
        "<h5>Following data was succesfully posted. </h5>" + post;
      // console.log(post);
    }
  });
}

function putData() {
  // const data = {
  //   title: "Custom Post",
  //   body: "This is a custom post"
  // };
  const http = new easyHTTP();
  // Update POST
  http.put("https://jsonplaceholder.typicode.com/posts/2", data, function(
    err,
    post
  ) {
    if (err) {
      document.getElementById("displayDiv").innerHTML = err;
      // console.log(err);
    } else {
      document.getElementById("displayDiv").innerHTML =
        "<h5>Following data was succesfully updated on ID 2. </h5>" + post;
      //console.log(post);
    }
  });
}

function deleteData() {
  // DELETE a POST
  const http = new easyHTTP();
  http.delete("https://jsonplaceholder.typicode.com/posts/2", function(
    err,
    response
  ) {
    if (err) {
      document.getElementById("displayDiv").innerHTML = err;
      //console.log(err);
    } else {
      document.getElementById("displayDiv").innerHTML =
        "<h5>2nd Post Status: </h5>" + response;
      //console.log(response);
    }
  });
}
