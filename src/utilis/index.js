
                                    // videos

export async function fetchVideos(filter){

    const { query, limit } = filter;
    
    const url = `https://pixabay.com/api/videos/?key=38513117-44e4f801df5b9883a1f52648e&q=${query}&per_page=${limit}&pretty=true`
    const response = await fetch(url)

    const data = await response.json()

    // console.log(data)
    return data?.hits
}

                                        // images

export async function fetchImages(filter){

    const { query, limit , id } = filter;

    const url = `https://pixabay.com/api/?key=38513117-44e4f801df5b9883a1f52648e&q=${query}&per_page=${limit}&orientation=horizontal&pretty=true`
    const response = await fetch(url)

    const data = await response.json()

    // console.log(data)
    return data?.hits

    
}

                                        //Illustration

export async function fetchIllustration(filter){

    const { query, limit } = filter;

    const url = `https://pixabay.com/api/?key=38513117-44e4f801df5b9883a1f52648e&q=${query}&orientation=horizontal&image_type=illustration&per_page=${limit}&pretty=true`
    const response = await fetch(url)

    const data = await response.json()

    // console.log(data)
    return data?.hits
}


                                        //Vector
                                        
export async function fetchVector(filter){

    const { query, limit } = filter;

    const url = `https://pixabay.com/api/?key=38513117-44e4f801df5b9883a1f52648e&q=${query}&orientation=horizontal&image_type=vector&per_page=${limit}&pretty=true`
    const response = await fetch(url)

    const data = await response.json()

    // console.log(data)
    return data?.hits
}