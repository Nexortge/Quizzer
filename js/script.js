import * as docx from 'docx';
import * as fs from 'fs';; // Import the fs module for file system operations

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

  docx.Packer.toBuffer(doc).then((buffer) => {
    // Use fs.writeFileSync instead of FileSystem.writeFileSync
    fs.writeFileSync("My Document.docx", buffer);
  }, (error) => console.log(error));
}
