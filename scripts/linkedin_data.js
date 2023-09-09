const clean = (job_title) => {
    if(!job_title) return;
    return job_title
        .replace.replace(job_title.substring(job_title.indexOf('('), job_title.length), '')
        .trim()
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

    return data;
}
