chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if(req.type === 'collect') {
        sendResponse(collect());
    } else {
        alert("ELSE RECEIVED");
    }
});

const clean = (job_title) => {
    if(!job_title) return;
    return job_title
        .replace.replace(job_title.substring(job_title.indexOf('('), job_title.length), '')
        .replace(job_title.substring(job_title.indexOf(' - '), job_title.length), '')
        .trim();
}

const collect = () => {

    const company = document.querySelector("a[href^='https://www.linkedin.com/company/']").innerText;
    const job_title = document.querySelector("h2[class*='job-title'").innerText;
    const job = clean(job_title);

    const data = {
        company: company,
        job: job
    }

    console.log(data);

    return data;
}

const getCoverLetter = () => {

}