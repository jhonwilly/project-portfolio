let name = prompt("Enter Fullname Please:").toLocaleUpperCase();
if(name != null){
    document.getElementById("sName").textContent = name;
}
function eval(){
    let exel = 0;
    let fail = 0;
    let mGrade = document.getElementById("mathGrade").value;
    let mRem =document.getElementById("mathRem");

    if(mGrade >= 90 && mGrade <= 100)
    {
        mRem.textContent = "Excellent";
        exel += 1;
        mRem.style.right = "-1.5rem";
        mRem.style.position = "relative";
    }
    else if(mGrade >= 80 && mGrade <= 89)
    {
        mRem.textContent = "Good";
        mRem.style.right = "-2.5rem";
        mRem.style.position = "relative";
    }
    else if(mGrade >= 70 && mGrade <= 79){
        mRem.textContent = "Average";
        mRem.style.right = "-1.8rem";
        mRem.style.position = "relative";
    }
    else if(mGrade >= 60 && mGrade <= 69){
        mRem.textContent = "Poor";
        mRem.style.right = "-2.8rem";
        mRem.style.position = "relative";
    }
    else if(mGrade >= 0 && mGrade <= 59){
        mRem.textContent = "Fail";
        mRem.style.right = "-3rem";
        mRem.style.position = "relative";
        fail+=1;
    }
    else{
        mRem.style.position = "relative";
        mRem.style.right = "-2.2rem";
        mRem.textContent = "invalid";
    }

    let sGrade = document.getElementById("sciGrade").value;
    let sRem =document.getElementById("sciRem");
    if(sGrade >= 90 && sGrade <= 100)
    {
        sRem.textContent = "Excellent";
        exel += 1;
        sRem.style.right = "-1.5rem";
        sRem.style.position = "relative";
    }
    else if(sGrade >= 80 && sGrade <= 89)
    {
        sRem.style.right = "-2.5rem";
        sRem.style.position = "relative";
        sRem.textContent = "Good";
    }
    else if(sGrade >= 70 && sGrade <= 79){
        sRem.textContent = "Average";
        sRem.style.right = "-1.8rem";
        sRem.style.position = "relative";
    }
    else if(sGrade >= 60 && sGrade <= 69){
        sRem.textContent = "Poor";
        sRem.style.right = "-2.8rem";
        sRem.style.position = "relative";
    }
    else if(sGrade >= 0 && sGrade <= 59){
        sRem.textContent = "Fail";
        sRem.style.right = "-3rem";
        sRem.style.position = "relative";
        fail+=1;
    }
    else{
        sRem.style.position = "relative";
        sRem.style.right = "-2.2rem";
        sRem.textContent = "invalid";
    }
    let eGrade = document.getElementById("engGrade").value;
    let eRem =document.getElementById("engRem");
    if(eGrade >= 90 && eGrade <= 100)
    {
        eRem.textContent = "Excellent";
        exel += 1;
        eRem.style.right = "-1.5rem";
        eRem.style.position = "relative";
    }
    else if(eGrade >= 80 && eGrade <= 89)
    {
        eRem.style.right = "-2.5rem";
        eRem.style.position = "relative";
        eRem.textContent = "Good";
    }
    else if(eGrade >= 70 && eGrade <= 79){
        eRem.textContent = "Average";
        eRem.style.right = "-1.8rem";
        eRem.style.position = "relative";
    }
    else if(eGrade >= 60 && eGrade <= 69){
        eRem.textContent = "Poor";
        eRem.style.right = "-2.8rem";
        eRem.style.position = "relative";
    }
    else if(eGrade >= 0 && eGrade <= 59){
        eRem.textContent = "Fail";
        eRem.style.right = "-3rem";
        eRem.style.position = "relative";
        fail+=1;
    }
    else{
        eRem.style.position = "relative";
        eRem.style.right = "-2.2rem";
        eRem.textContent = "invalid";
    }
    let fGrade = document.getElementById("filGrade").value;
    let fRem =document.getElementById("filRem");
    if(fGrade >= 90 && fGrade <= 100)
    {
        fRem.textContent = "Excellent";
        exel += 1;
        fRem.style.right = "-1.5rem";
        fRem.style.position = "relative";
    }
    else if(fGrade >= 80 && fGrade <= 89)
    {
        fRem.style.right = "-2.5rem";
        fRem.style.position = "relative";
        fRem.textContent = "Good";
    }
    else if(fGrade >= 70 && fGrade <= 79){
        fRem.textContent = "Average";
        fRem.style.right = "-1.8rem";
        fRem.style.position = "relative";
    }
    else if(fGrade >= 60 && fGrade <= 69){
        fRem.textContent = "Poor";
        fRem.style.right = "-2.8rem";
        fRem.style.position = "relative";
    }
    else if(fGrade >= 0 && fGrade <= 59){
        fRem.textContent = "Fail";
        fRem.style.right = "-3rem";
        fRem.style.position = "relative";
        fail+=1;
    }
    else{
        fRem.style.position = "relative";
        fRem.style.right = "-2.2rem";
        fRem.textContent = "invalid";
    }
    let pGrade = document.getElementById("peGrade").value;
    let pRem =document.getElementById("peRem");
    if(pGrade >= 90 && pGrade <= 100)
    {
        pRem.textContent = "Excellent";
        exel += 1;
        pRem.style.right = "-1.5rem";
        pRem.style.position = "relative";
    }
    else if(pGrade >= 80 && pGrade <= 89)
    {
        pRem.style.right = "-2.5rem";
        pRem.style.position = "relative";
        pRem.textContent = "Good";
    }
    else if(pGrade >= 70 && pGrade <= 79){
        pRem.textContent = "Average";
        pRem.style.right = "-1.8rem";
        pRem.style.position = "relative";
    }
    else if(pGrade >= 60 && pGrade <= 69){
        pRem.textContent = "Poor";
        pRem.style.right = "-2.8rem";
        pRem.style.position = "relative";
    }
    else if(pGrade >= 0 && pGrade <= 59){
        pRem.textContent = "Fail";
        pRem.style.right = "-3rem";
        pRem.style.position = "relative";
        fail+=1;
    }
    else{
        pRem.style.position = "relative";
        pRem.style.right = "-2.2rem";
        pRem.textContent = "invalid";
    }
    let eval = document.getElementById("lastLine3");
    if(exel == 5){
        eval.style.left = "28rem";
        eval.style.position = "relative";
        eval.textContent = "Top Honor";
    }
    else if(exel == 4 || exel == 3){
        eval.style.position = "relative";
        eval.style.left = "23rem";
        eval.textContent = "Second Honorable Student";
    }
    else if(fail==5){
        eval.style.position = "relative";
        eval.textContent = "Repeater";
        eval.style.left = "28.5rem";
    }
    else{
        eval.style.left = "29rem";
        eval.style.position = "relative";
        eval.textContent = "No rank";
    }
    
}