export const sendOrder = (jsonString) => {
    return fetch(`https://functions.yandexcloud.net/d4et5mddo52k0fjps5hf`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: jsonString,
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Ошибка: ${response.status}`);
      }
    })
    .then((resp) => {
        console.log(resp);
    })
  };