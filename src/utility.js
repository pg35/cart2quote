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
export let fetcherGlobals = {
  method: "POST",
  body: JSON.stringify({}),
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "same-origin"
};
function doAjaxDummy(url, options) {
  return new Promise(function (r, re) {
    setTimeout(() => r({ message: "aaa" }), 200);
  });
}
function doAjax(url, options) {
  return fetch(url, { ...fetcherGlobals, ...options })
    .then(checkStatus)
    .then(parseJSON);
}
export { ajaxUrl, spinnerUrl, doAjax, doAjaxDummy };
