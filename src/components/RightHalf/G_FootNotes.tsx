function FootNotes(props: any) {
  return (
    <footer className="footnotes m-2 me-1">
      <p>{props.footnotes.text}</p>
      <p>{props.footnotes.copyright}</p>
    </footer>
  );
}

export default FootNotes;
