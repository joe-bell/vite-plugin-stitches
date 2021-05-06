interface IViteStitchesProps {
  configPath?: string;
  getCssString?: (() => string) & (() => string);
}

const ViteStitches = ({ getCssString }: IViteStitchesProps) => ({
  name: "html-transform",
  transformIndexHtml(html) {
    return html.replace(
      /<\/head>/,
      `    <style id="stitches">${getCssString()}</style>
  </head>`
    );
  },
});

export default ViteStitches;
