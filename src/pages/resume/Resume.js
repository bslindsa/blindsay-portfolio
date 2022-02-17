import React from 'react';
import resume from './blindsay-resume.pdf';

export default function Resume() {

  return (
    <div className="mt-5">
      <div md="12">
        <embed id="Resume" src={resume} width="100%" height="950px%" />
      </div>
    </div>
  );
}
