var clearRequired = false;

function clearData() {
    document.getElementById("displayArea").value ="";
    document.getElementById("historyArea").value ="";
    clearRequired = false;
}

function clearResult(){
    document.getElementById("displayArea").value ="";
    clearRequired = false;
    
}

function deleteData() {
    document.getElementById("displayArea").value = document.getElementById("displayArea").value.slice(0, -1);
}

function inputData(data) {
    if(clearRequired){
        clearResult();
    }
    document.getElementById("displayArea").value = document.getElementById("displayArea").value + data;
}

function evaluvate() {
    try {
        clearRequired = true;
        var result = document.getElementById("displayArea").value = eval(document.getElementById("displayArea").value);
        storeHistory(result);
    } catch (error) {
        document.getElementById("displayArea").value = "Bad Expression";
    }
}

function storeHistory(result){
    document.getElementById("historyArea").value = document.getElementById("historyArea").value+result+"\n";
}