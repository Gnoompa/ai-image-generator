const fetchSuggestionFromChatGPT = (key: string) =>
    fetch(key, {
        cache: 'no-store'
    }).then(res => res.json());


export default fetchSuggestionFromChatGPT;
