const students = [
    {name: "Saliyha Webb", score:77},
    {name: "Elsa Rodriguez", score:90},
    {name: "ToniAnn Loscalzo", score:88}
]

class Exercise{
    constructor(students){
        this.students = students;
        this.extraCredit = this.giveExtraCredit();
        this.passers = this.getPassers();
        this.average = this.getAverage();
    }

    giveExtraCredit(){
        return this.students.map(student => {
            return {name: student.name, score: student.score + 15}
        });
    }

    getPassers(){
        return this.extraCredit.filter(grade => {
            if (grade.score > 59){
                return true; 
            } // could also shorten this to: (grade => grade.score > 59);
        });
    }

    getAverage(){
        return this.extraCredit.reduce((acc, curr, index) =>{
            if (this.extraCredit.length === index+1){
                return ((acc + curr.score)/(index+1));
            } 
                return acc+curr.score;
        },0);
    }
}

const assignment = new Exercise(students);
console.log(assignment);