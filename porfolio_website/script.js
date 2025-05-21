document.getElementById('downloadBtn').addEventListener('click', function () {
    fetch('CV_Albina_Diakova.pdf') // Endre til riktig sti til PDF-filen
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'Albina_Diakova_CV.pdf'; // Navnet som filen vil ha ved nedlasting
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(link.href); // Frigjør minne
        })
        .catch(error => console.error('There was an error downloading the file:', error));
});
