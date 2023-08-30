function createAndDownloadFile() {
    // Generate the text content
    const text = "DoodoFart";
  
    // Create a Blob containing the text
    const blob = new Blob([text], { type: "text/plain" });
  
    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);
  
    // Create a download link
    const a = document.createElement("a");
    a.href = url;
    a.download = "mytextfile.txt";
  
    // Trigger a click event to simulate a download
    a.click();
  
    // Release the URL object
    URL.revokeObjectURL(url);
  }
