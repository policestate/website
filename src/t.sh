#!/bin/bash

while read -r component; do
    # Create a new file with the component name
    cat <<EOF > "${component}.js"
import React from 'react';

import ShowLink from './ShowLink';
import TextComponent from './${component}/TextComponent';
import papers from '../papers/paperConfig';

const ${component} = () => {
  return (
    <div>
      <h2>{papers.${component}.name}</h2>
      <ShowLink link={papers.${component}.link} />
      <p className="project-url">
        Academic:{" "}
        <a href={papers.${component}.alink} target="_blank" rel="noopener noreferrer">
          {papers.${component}.alink}
        </a>
      </p>
      <TextComponent />
    </div>
  );
};

export default ${component};
EOF

done < f.md

