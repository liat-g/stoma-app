export const artworks_CONFIG = {
    BASE_URL: 'https://api.artic.edu/api/v1/',
    headers: {
        accept: 'application/json'
    }
}

const url = 'https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true'
const options = {
method:'GET',
headers: {
    accept: 'application/json'

}
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err))