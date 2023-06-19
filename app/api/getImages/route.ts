export async function GET(request:Request) {
    const response = await fetch('https://ai-image-generator-ytb-app.azurewebsites.net/api/getimages', {
        cache:"no-store"
    });

    const blob = await response.blob();
    const textData = await blob.text();

    const data = JSON.parse(textData);
    console.log(data)

    return new Response(JSON.stringify(data), {
        status:200,
        headers: {
            'x-content-type-options': 'nosniff'
        }
    });
}
