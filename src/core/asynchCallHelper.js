function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    // Assuming even errors will have json syntax
    return response.json()
      .then(function (error) {
        throw error;
      });
  }
}

var fetchGet = (request) => {
  return fetch(request.url, request.options)
    .then(handleResponse);
}

export default {
  Get: fetchGet,
}