import { StoryEditor, InterfaceSkeleton } from '@googleforcreators/story-editor';
import { elementTypes } from '@googleforcreators/element-library';
import { registerElementType } from '@googleforcreators/elements';

import React from 'react';
import ReactDOM from 'react-dom';


const Editor = () => {
  const apiCallbacks = {
    saveStoryById: () => Promise.resolve({}),
  };

  elementTypes.forEach(registerElementType);

  return (
    <StoryEditor config={{ apiCallbacks }} initialEdits={{ story: {} }}>
      <InterfaceSkeleton />
    </StoryEditor>
  );
};


const root = document.getElementById("root");
ReactDOM.render(<Editor />, root)
