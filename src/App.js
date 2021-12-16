import { useEffect, useState } from 'react';

function App() {

    const [newsList, setNewsList] = useState([])

    function getSpaceArticles() {
        fetch(
            "https://api.spaceflightnewsapi.net/v3/articles"
        ).then((response) => response.json()).then((data) => {
            setNewsList(data)
        });
    }

    useEffect(() => {
        getSpaceArticles()
    });

    return (
        <div className="container-fluid mx-auto">
            <h1 className="text-blue-800 text-center mt-10 text-3xl">Space News</h1>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {newsList.map((article, key) => {
                    return (
                        <div
                            key={key}
                            onClick={() => {
                                window.location.href = article.url
                            }}
                            className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
                        >
                            <img
                                src={article.imageUrl}
                                alt={article.title}
                                className="object-cover w-full h-64"

                            />
                            <div className="p-5 border border-t-0">
                                <h4 className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
                                    {article.title}
                                </h4>
                                <p className="mb-2 text-gray-700">
                                    {article.summary}
                                </p>

                            </div>
                        </div>
                    )
                })}
                </div>
            </div>

        </div>
    );
}

export default App;
