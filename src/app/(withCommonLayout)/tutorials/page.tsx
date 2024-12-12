const tutorials = [
  {
    id: 1,
    title: "Japanese Greetings",
    url: "https://www.youtube.com/embed/video1",
  },
  {
    id: 2,
    title: "Basic Vocabulary",
    url: "https://www.youtube.com/embed/video2",
  },
  {
    id: 3,
    title: "Japanese Grammar Tips",
    url: "https://www.youtube.com/embed/video3",
  },
  {
    id: 4,
    title: "Common Phrases",
    url: "https://www.youtube.com/embed/video4",
  },
  {
    id: 5,
    title: "Hiragana and Katakana",
    url: "https://www.youtube.com/embed/video5",
  },
  {
    id: 6,
    title: "Numbers in Japanese",
    url: "https://www.youtube.com/embed/video6",
  },
  {
    id: 7,
    title: "Daily Conversations",
    url: "https://www.youtube.com/embed/video7",
  },
  {
    id: 8,
    title: "Japanese Culture",
    url: "https://www.youtube.com/embed/video8",
  },
];

const Tutorials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-primary">
          Japanese Language Tutorials
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="relative aspect-video">
              <iframe
                className="w-full h-full rounded-t-lg shadow-lg"
                src={tutorial.url}
                title={tutorial.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="bg-primary text-white text-xl text-center font-semibold p-3 rounded-b-lg">
                {tutorial.title}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tutorials;
