import React from 'react';

function PagesParser(pages) {
  const pagesArray = pages.map((page, _) => (
    <div key={page.name}>
      {page.elements.map((element, idx) => {
        const Tag = element.type;
        return <Tag key={idx} dangerouslySetInnerHTML={{ __html: element.innerHTML }} />;
      })}
    </div>
  ));

  return pagesArray;
}

export default PagesParser;