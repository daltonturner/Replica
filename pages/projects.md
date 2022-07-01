---
type: page
title: Projects
date: 2020-07-01
description: Some of my favorite work.
---

# Projects

Some of my favorite work.

export function Tile({ title, url, description }) {
  const H3 = 'h3'
  return (
    <a className="tile-card block font-semibold" href={url} target="_blank">
      <H3>
        {title}
      </H3>
      <p>{description}</p>
    </a>
  );
}

<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
  <Tile title="CSS-Only Dino Game" url="/insites/dino.html" description="A trick to reflect document state from CSS animations (Chrome only)." />
</div>
