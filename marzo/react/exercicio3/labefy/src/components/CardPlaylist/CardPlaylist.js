import React from 'react';
import "./styles.css";

export default function CardPlaylist(item) {
  return (
    <div className="card">
      <h2>{item.playlists.name}</h2>
      <button>VER</button>
    </div>
    );
}
