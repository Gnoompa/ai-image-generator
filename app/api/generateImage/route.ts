import { NextResponse } from "next/server";

export async function POST(request:Request) {
    const res = await request.json(); // res now contains body
    const prompt = res.prompt;

    const response = await fetch('https://ai-image-generator-ytb-app.azurewebsites.net/api/generateimage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    })

    const textData = await response.text();

    return NextResponse.json(textData);


    // // Connect to our Microsoft Azure Function Endpoint
    // const response = await fetch("http://127.0.0.1:7071/api/getChatGPTSuggestion", {
    //     cache: 'no-store'
    // }) 

    // const textData = await response.text();
    // console.log(textData)
    // return new Response(JSON.stringify(textData.trim()), {
    //     status:200,
    // });



//     const textdata = 'Hello Word!'
//     console.log(textdata)
//    return new Response(textdata)
   
}