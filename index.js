
function updateUTCTime() {
    const timeInMilliseconds = document.querySelector('[data-testid="currentUTCTime"]');
    setInterval(() => {
        const currentUTCTime = new Date().getMilliseconds();
        timeInMilliseconds.textContent = currentUTCTime;
    }, 1000); 
     
}
 
updateUTCTime();


 