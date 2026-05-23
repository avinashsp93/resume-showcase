function Link(props: any) {
  return (
    <div className="tech-links m-1 p-1">
      <a href="/" className="h6 m-2" target="_blank" rel="noreferrer">
        {props.link}
      </a>
    </div>
  );
}

export default Link;
