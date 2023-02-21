// import { useState, useEffect } from 'react';
// import axios from 'axios';


// export default function useAsanaRequest(method, path, params, headers, data) {

//     const [response, setResponse] = useState(null);
//     const [error, setError] = useState(null);



//     useEffect(() => {
//        const request =  axios`.${method}`( url, params, headers, data)
//             .then(function (response) {
//                 setResponse(response.data);
//             })
//             .catch(function (error) {
//                 setError(error.response.data);
//             });

//             return request()
//     }, [method, path, params, headers, data])

//     return { response, error };

// }