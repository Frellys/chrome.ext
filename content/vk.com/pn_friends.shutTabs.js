{
    // shut school filter
    let schoolHeader = document.querySelector('div#school_header');
    if (schoolHeader && schoolHeader.classList.contains('search_filter_open')) {
        schoolHeader.click();
    }
    // shut uni filter
    let uniHeader = document.querySelector('div#uni_header');
    if (uniHeader && uniHeader.classList.contains('search_filter_open')) {
        uniHeader.click();
    }
}