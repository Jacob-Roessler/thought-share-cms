import Link from 'next/link';

const tools = [
  {
    name: 'MAL Cast Overlap',
    url: 'https://jacob-roessler.github.io/mal-cast-overlap/',
    description: 'Find overlap between any people on myanimelist',
  },
  {
    name: 'MAL Tierlist',
    url: 'https://mal-tierlist.vercel.app/',
    description: 'Make a tierlist from your myanimelist profile',
  },
  {
    name: 'Sakugabooru Browser',
    url: 'https://sakugabooru-browser.vercel.app/',
    description: 'Alternate browser for sakugabooru',
  },
];

export default function Page() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-row flex-wrap gap-10 justify-center">
        {tools.map((tool, index) => {
          return (
            <div key={index} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={`/tools/${tool.name}.png`} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{tool.name}</h2>
                <p>{tool.description}</p>
                <div className="card-actions justify-end">
                  <Link target="_blank" href={tool.url} className="btn btn-primary">
                    Go
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
