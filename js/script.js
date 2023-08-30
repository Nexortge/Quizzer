
import * as docx from '../node_modules/docx/index.js';

function fart() {
  const doc = new docx.Document({
    sections: [
      {
        properties: {},
        children: [
          new docx.Paragraph({
            children: [
              new docx.TextRun("Hello World"),
              new docx.TextRun({
                text: "Foo Bar",
                bold: true,
              }),
            ],
          }),
        ],
      },
    ],
  });

  docx.Packer.toBlob(doc).then((blob) => {
    // Create a download link for the blob
    const url = URL.createObjectURL(blob);

    // Create a link element and trigger a download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'My Document.docx';
    a.click();

    // Clean up by revoking the Object URL
    URL.revokeObjectURL(url);
  }).catch((error) => console.log(error));
}
