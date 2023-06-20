const fetchSuggestionFromChatGPT = (key) =>
    fetch(key, {
        cache: 'no-store'
    }).then(res => res.json());


export default fetchSuggestionFromChatGPT;
