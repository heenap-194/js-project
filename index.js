function updatecount() {
    const countElement = document.getElementById('count');
    let count = parseInt(countElement.innerHTML) || 0;
    count += 1;
    countElement.innerHTML = count;
    console.log(count)
}
