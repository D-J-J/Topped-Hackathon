import React from 'react';
var currentDate = new Date().toJSON();
var statusEnum = Object.freeze({"active":1, "completed":2, "not_started":3})

export default class Competition {

    constructor(id, name, desc, startDate, endDate, problems, fee, admins) {
        this.id = id;
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
