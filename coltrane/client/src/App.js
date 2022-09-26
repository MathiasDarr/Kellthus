import React, { useEffect, useState } from "react";
import axios from 'axios'

async function getApiResponse(){
  const { response } = await axios.get(
    '/api/test'
  )
  return response
}


function App() {  
  const [post, setPost] = useState(null);
  // const { data } = await axios.get('/api/test')
  // var data = getApiResponse()
  // console.log("data", data)

  useEffect(() => {
    axios.get('/api/test').then((response) => {
      console.log("response data ", response.data)
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}



  //   return (
//     <div>
//       <p>From server:  </p>
//     </div>
//   );
// }

export default App;
