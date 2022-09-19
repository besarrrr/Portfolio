import React from "react";

function Footer () {

   // Function will execute on click of button
   const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Resume - Gonzalez, Cesar.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume - Gonzalez, Cesar.pdf';
            alink.click();
        })
    })
}

    return (
        <footer className="flex-row">
            <div></div>
                <div>
                <a class="footer-links" href="https://github.com/besarrrr"  target="_blank">GitHub</a>
                <a class="footer-links" href="http://linkedin.com/in/cesar-gonzalez-83a878141" target="_blank">Linkedin</a>
                <a class="footer-links"  onClick={onButtonClick}>Resume</a>
                </div>
        </footer>
    );

}

export default Footer;