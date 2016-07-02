function sum() {
    var total = 0;
    var ans1 = document.getElementById('answer1').value;
    if (ans1 === '统一建模语言') {
        total += 5;
    }
    var ans2 = document.getElementById('answer2').value;
    if (ans2 === ('封装性' || '继承性' || '多态性')) {
        total += 5;
    }
    var ans3 = document.getElementById('answer3').value;
    if (ans3 === ('封装性' || '继承性' || '多态性')) {
        total += 5;
    }
    if ((ans3 === ('封装性' || '继承性' || '多态性')) && (ans3 != ans2)) {
        total += 5;
    }
    var ans4 = document.getElementById('answer4').value;
    if (ans4 === ('封装性' || '继承性' || '多态性') && ans4 != ans3) {
        total += 5;
    }
    var ans5 = document.getElementsByName('inlineRadioOptions1');
    for (var i = 0; i < ans5.length; i++) {
        if (ans5[i].checked && ans5[i].value === 'D') {
            total = total + 5;
        }
    }
    var ans6 = document.getElementsByName('inlineRadioOptions2');
    for (i = 0; i < ans6.length; i++) {
        if (ans6[i].checked && ans6[i].value === 'A') {
            total = total + 5;
        }
    }
    var ans7 = document.getElementsByName('inlineRadioOptions3');
    for (i = 0; i < ans7.length; i++) {
        if (ans7[i].checked && ans7[i].value === ('A' || 'B' || 'D')) {
            total = total + 5;
        }
    }
    var ans8 = document.getElementsByName('inlineRadioOptions4');
    for (i = 0; i < ans8.length; i++) {
        if (ans8[i].checked && ans8[i].value === ('A' || 'B' || 'C')) {
            total = total + 5;
        }
    }
    var ans9 = document.getElementsByName('inlineRadioOptions5');
    for (i = 0; i < ans9.length; i++) {
        if (ans9[i].checked && ans9[i].value === 'C') {
            total = total + 5;
        }
    }
    var ans10 = document.getElementsByName('inlineRadioOptions6');
    for (i = 0; i < ans10.length; i++) {
        if (ans10[i].checked && ans10[i].value === 'C') {
            total = total + 5;
        }
    }
    var topic9 = document.getElementsByName("topic9");
    for (var m = 0; m < topic9.length; m++) {
        if (topic9[m].checked && topic9[m] === '错') {
            total += 5;
        }
    }
    var topic10 = document.getElementsByName("topic10");
    for (var n = 0; n < topic10.length; n++) {
        if (topic10[n].checked && topic10[n] === '对') {
            total += 5;
        }
    }
    var ans13 = document.getElementById('answer5');
    if (ans13 === '模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。') {
        total += 10;
    }
    document.getElementById("result").innerHTML = total;
    console.log(total);
}