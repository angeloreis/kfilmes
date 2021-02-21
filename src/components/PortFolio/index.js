import React from 'react';

const cardItem = ({ imageUrl, description }) => {
  return (
    <div className='w-full lg:w-1/2 md:px-4 lg:px-6 py-5'>
      <div className='bg-white hover:shadow-xl'>
        <div>
          <img
            src={imageUrl}
            alt={description}
            className='h-56 w-full border-white border-8 hover:opacity-25'
          />
        </div>
        <div className='px-4 py-4 md:px-10'>
          <p className='py-4'>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Portfolio = (data) => {
  const { edges } = data.graphql.user.edge_owner_to_timeline_media;

  return (
    <div id='#portfolio'>
      <h1>PORTIFOLIO</h1>
      {data &&
        edges.map((d) => {
          cardItem(d.display_url, d.edge_media_to_caption.edges[0].node.text);
        })}
    </div>
  );
};

export default Portfolio;
