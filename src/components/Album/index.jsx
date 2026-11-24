function Album() {
  return (
    <section className="album-single">
      <img
        className="album-single__cover"
        src="https://thumb.wikimedia.org/wikipedia/en/thumb/a/ae/Drake_-_Take_Care_cover.jpg/250px-Drake_-_Take_Care_cover.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
        alt="Take Care album cover"
      />

      <div className="album-single__details">
        <p className="eyebrow">Album</p>
        <h1>Take Care</h1>
        <p>Released 2011</p>
      </div>
    </section>
  );
}

export default Album;