import React from 'react';
var currentDate = new Date().toJSON();
console.log(currentDate);

var statusEnum = Object.freeze({"active":1, "completed":2, "not_started":3})

export default class Competition {
    // id = 0;
    // name = "";
    // desc = "";
    // startDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);
    // endDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);
    // problems = 0;
    // fee = 0;
    

    constructor(name, desc, startDate, endDate, problems, fee, admins) {
        this.id; // generate
        this.name = name;
        this.desc = desc;
        this.startDate = startDate;
        this.endDate = endDate;
        this.duration = this.startDate - this.endDate;
        this.fee = fee;
        this.problems = problems;
        if(currentDate > this.startDate && currentDate < this.endDate){
            this.status = statusEnum.active;
        }else{
            this.status = statusEnum.not_started;
        }
        this.admins = admins;   
      
    }
  }
