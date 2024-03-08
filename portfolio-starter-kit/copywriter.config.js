const YEAR = new Date().getFullYear()

// このコンポーネントをデフォルトでエクスポートする
export default {
  // JSXレンダリング結果をfooterに代入
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Sasaki Subaru.
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
  )
}
