function book() {
    var done;
    var id = document.getElementById("book").value;
    fetch("csv/books.csv")
        .then(x => x.text())
        .then(y => {
            console.log(y);
            var data = CSVToArray(y, ',');
            data.forEach(element => {
                element.forEach(name => {
                    if (id.includes(name)) {
                        console.log("Book found, viewing book via pdf.js...");
                        var pdf = document.createElement("div");
                        pdf.innerHTML = `
                        <div>
                            <iframe id="pdf-js-viewer" src="web/viewer.html?file=/code-books/pdfs/` + element[1] + `.pdf" title="webviewer" frameborder="0" width="800" height="600"></iframe>
                        </div>
                        `;
                        document.body.appendChild(pdf);
                        done = true;
                    }
                })
                
            });
            if (done !== true) {
                console.warn("Book was not found.");
                var error = document.createElement("p");
                error.innerHTML = "The code is invalid... Try entering the code again.";
                error.id = "myBlinkingDiv";
                error.style.color = "red";
                document.body.appendChild(error);
                start_blink();
            }
        });
}
