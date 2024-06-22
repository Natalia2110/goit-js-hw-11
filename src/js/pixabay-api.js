export async function getImages(request) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '44418953-cdbfe82a1d191a3eebe28ee3b',
    q: request,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 100,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;
//   console.log(url);

  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content - Type': 'application/json',

      'X-RateLimit-Limit': '100',
      'X-RateLimit-Remaining': '99',
      'X-RateLimit-Reset': '0.6',
    },
  };
  const res = await fetch(url, { options });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error(res.status);
  }
}

// getImages(`dog`);

// async function getImages(request) {
//     const BASE_URL = 'https://pixabay.com';
//     const END_POINT = '/api/';
//     const params = new URLSearchParams({
//         key: '44418953-cdbfe82a1d191a3eebe28ee3b',
//         q: `${request}`,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//     });

//     const url = `${BASE_URL}${END_POINT}?${params}`;
//     console.log(url);

//     const headers = {
//         'Content-Type': 'application/json',

//         'X-RateLimit-Limit': '100',
//         'X-RateLimit-Remaining': '99',
//         'X-RateLimit-Reset': '0.6',
//     };

//     const res = await fetch(url, { headers });
//     return await res.json();

// };
