var Record = require('../record');

/**
 * OPIc record class. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 */
class OPIc extends Record{

    static get GRADE(){
        return ['AL', 'IH', 'IM1', 'IM2', 'IM3', 'IL', 'NH', 'NM', 'NL'];
    }

    constructor(phoneNo, grade, data){
        super();
        this.phoneNo = phoneNo;
        this.grade = grade;
        this.data = data;
    }

    get grade(){
        return this.grade;
    }

    set grade(grade){
        if(grade in OPIc.GRADE){
            this.grade = grade;
        }else{
            throw new Error(grade + ' is not valid OPIc grade');
        }
    }
}

module.exports = OPIc;