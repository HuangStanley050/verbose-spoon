import axios from "axios";

// export const getPosts = () => (dispatch) =>
//   axios({
//     method: "GET",
//     url: `https://jsonplaceholder.typicode.com/posts`,
//     headers: [],
//   }).then((response) => dispatch({ type: "FOO", payload: response.data }));

export const getPosts = () => {
  return async (dispatch) => {
    try {
      let res = await axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/posts`,
        headers: [],
      });
      dispatch({ type: "FOO", payload: res.data });
    } catch (err) {
      console.log("error happened");
      console.log(err);
    }
  };
};
