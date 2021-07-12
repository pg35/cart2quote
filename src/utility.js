const ajaxUrl = "undefined" === typeof ajaxurl ? "" : ajaxurl;
const spinnerUrl =
  "undefined" === typeof mwqcSpinnerUrl
    ? "http://immi.epizy.com/wp-includes/images/spinner.gif"
    : mwqcSpinnerUrl;

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const msg = response.statusText ? response.statusText : "Network Error";
    var error = new Error(msg);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}
export let ajaxGlobals = {
  method: "POST",
  body: "",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  credentials: "same-origin"
};
function doAjaxDummy(url, options) {
  return new Promise(function (r, re) {
    setTimeout(() => {
      console.log(options);
      r({ message: "aaa" });
    }, 200);
  });
}
function doAjax(url, options) {
  return fetch(url, { ...ajaxGlobals, ...options })
    .then(checkStatus)
    .then(parseJSON);
}
export { ajaxUrl, spinnerUrl, doAjax, doAjaxDummy };
