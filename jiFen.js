
function getMyScores() {
    let _myScores = {}
    className("android.widget.ListView").findOnce().children().forEach(item => {
        let name = item.child(0).child(0).desc();
        let str = item.child(2).desc().split("/");
        let score = str[0].match(/[0-9][0-9]*/g);
        let value = str[1].match(/[0-9][0-9]*/g);
        _myScores[name] = Array(score, value);
    });
    return _myScores;
}

console.show();

var myScores=getMyScores();
var aTime=(6-myScores["文章学习时长"][0].toString())*120/4+15;//至少15s
console.log(typeof (7-myScores["阅读文章"][0].toString()));
console.log(typeof aTime);