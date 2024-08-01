document.addEventListener('DOMContentLoaded', (event) => {
    if ('NDEFReader' in window) {
        const ndef = new NDEFReader();
        ndef.scan().then(() => {
            document.getElementById('status').textContent = 'Bisa mendeteksi NFC';
        }).catch(error => {
            document.getElementById('status').textContent = 'Gagal mendeteksi NFC: ' + error;
        });
    } else {
        document.getElementById('status').textContent = 'NFC tidak didukung di perangkat ini.';
    }
});