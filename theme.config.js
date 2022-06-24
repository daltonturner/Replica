const YEAR = new Date().getFullYear()

export default {
  footer: (
    <div>
      <hr />
      <a href="https://twitter.com/dangerdalt" target="_blank">
        Twitter
      </a>{" "}
      ·{" "}
      <a href="https://GitHub.com/daltonturner" target="_blank">
          GitHub
      </a>
      <small style={{ display: 'block', marginTop: '8rem' }}>
        <time>{YEAR}</time> © Dalton Turner.
        <a href="/feed.xml">RSS</a>
        <style jsx>{`
          a {
            float: right;
          }
          @media screen and (max-width: 480px) {
            article {
              padding-top: 2rem;
              padding-bottom: 4rem;
            }
          }
        `}</style>
      </small>
    <div>
  )
}