const axios = require('axios');

module.exports = {
  getTodayPosts: getTodayPosts,
  getPostsById: getPostsById,
  getPostsByDay: getPostsByDay
};

const token = process.env.API_TOKEN

const instance = axios.create({
  baseURL: 'https://api.producthunt.com/v1/posts',
  headers: {'Authorization': 'Bearer ' + token}
});

function getTodayPosts() {
    return instance.get('/')
      .then((response) => {
          return response.data;
      }).catch((error) => {
          console.log(error)
      });
}

function getPostsByDay(day) {
  return instance.get('', {
      params: {
        day: day
      }
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error)
    });
}

function getPostsById(id) {
  return instance.get(`/${id}`)
    .then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error)
    });
}
