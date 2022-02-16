import React from 'react';
import resume from './blindsay-resume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <iframe title='my-resume' src={resume} alt="Brad Lindsay Resume"></iframe>
    </div>
  );
}
