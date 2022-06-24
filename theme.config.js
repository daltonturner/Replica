const YEAR = new Date().getFullYear()

export default {
  footer: (
    <div>
      <hr />
      <a href="https://twitter.com/dangerdalt" target="_blank">
        Twitter
      </a>{" "}
      ·{" "}
      <a href="https://github.com/daltonturner" target="_blank">
        GitHub
      </a>
      <small style={{ display: "block", marginTop: "8rem" }}>
        <time>{YEAR}</time> © Shu Ding.
        <a href="/feed.xml">RSS</a>
        <style jsx>{`
          a {
            float: right;
          }
        `}</style>
      </small>
    </div>
  ),
}