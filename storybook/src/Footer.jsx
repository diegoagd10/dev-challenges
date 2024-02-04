export function Footer() {
  const fontIconRef = "https://material.io/resources/icons/?style=round";

  return (
    <footer className="sb-footer">
      <small className="sb-footer-acknowledgements">
        <span>Icons: </span>
        <a href={fontIconRef} target="_blank" rel="noreferrer">
          {fontIconRef}
        </a>
      </small>
      <small className="sb-footer-author">
        <span>created by </span>
        <strong>
          <a
            className="sb-footer-author-link"
            href="https://github.com/diegoagd10"
            target="_blank"
            rel="noreferrer"
          >
            diegoagd10
          </a>
        </strong>
        <span> - </span>
        <a
          className="sb-footer-dev-io-link"
          href="https://legacy.devchallenges.io"
          target="_blank"
          rel="noreferrer"
        >
          devChallenges.io
        </a>
      </small>
    </footer>
  );
}
