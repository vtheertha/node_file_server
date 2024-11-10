function showForm(option) {
    document.getElementById('createForm').style.display = 'none';
    document.getElementById('readForm').style.display = 'none';
    document.getElementById('writeForm').style.display = 'none';
    document.getElementById('searchForm').style.display = 'none';
    if (option === 'create') {
        document.getElementById('createForm').style.display = 'block';
    } else if (option === 'read') {
        document.getElementById('readForm').style.display = 'block';
    } else if (option === 'write') {
        document.getElementById('writeForm').style.display = 'block';
    } else if (option === 'search') {
        document.getElementById('searchForm').style.display = 'block';
    }
}

function backToHome() {
    document.getElementById('createForm').style.display = 'none';
    document.getElementById('readForm').style.display = 'none';
    document.getElementById('writeForm').style.display = 'none';
    document.getElementById('searchForm').style.display = 'none';
}

function createFile() {
    const fileName = document.getElementById('createFileName').value;
    fetch('/create', {
        method: 'POST',
        body: JSON.stringify({ filename: fileName }),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.text())
    .then(data => document.getElementById('result').innerText = data);
}

function readFile() {
    const fileName = document.getElementById('readFileName').value;
    fetch('/read', {
        method: 'POST',
        body: JSON.stringify({ filename: fileName }),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.text())
    .then(data => document.getElementById('result').innerText = data);
}
