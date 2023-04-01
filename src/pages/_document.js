import Document, { Html, Main, Head, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{__html: `
            if (window.location.href.includes('#invite_token')) {
              document.location.href = "/admin/" + window.location.hash;
            }
            if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                if (!user) {
                    window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                    });
                }
                });
            }
          `}}>
            </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;