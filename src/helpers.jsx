export const reviewBudgetVisibility = (totalBudget , remainingBudget) =>{
    let additionalClasses;

    if((totalBudget / 4) > remainingBudget){
        additionalClasses = "bg-red-100 border-red-800 text-red-700";
    }else if((totalBudget / 2) > remainingBudget){
        additionalClasses = "bg-orange-100 border-orange-800 text-orange-700";   
    }else{
        additionalClasses = "bg-green-100 border-green-800 text-green-700";
    }


    return additionalClasses;
}