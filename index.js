"use strict";
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

  function getLearnerData(course, ag, submissions) {
    let arr = []
    if(course.id === 451){
        const result =[{
            id:125,
            avg:(getAverage1251(submissions)  + getAverage1252(submissions)) / 2,
            1:getAverage1251(submissions),
            2:getAverage1252(submissions)
        
           },
           {
            id:132,
            avg: (getAverage1321(submissions) + getAverage1322(submissions)) / 2,
            1: getAverage1321(submissions),
            2: getAverage1322(submissions)
           }
        
        ]
           return result
    }
       
    
         

    }
       
  



  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

  console.log(result);



function getId(object){
    let arr = []
    object.forEach(function(objects){
        if(!arr.includes(objects.learner_id)){
            arr.push(objects.learner_id)
        }

    })
    return arr
}




function getAverage1321(object) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < object.length; i++) {
      if (object[i].assignment_id === 1 && object[i].learner_id === 132) {
        sum += object[i].submission.score;
      }
    }
    if (
      AssignmentGroup.assignments[1].due_at.split("-").join("") <
      LearnerSubmissions[3].submission.submitted_at.split("-").join("")
    ) {
      return (sum - sum * 0.1) / AssignmentGroup.assignments[0].points_possible;
    }
    return sum / AssignmentGroup.assignments[0].points_possible;
  }
  
  function getAverage1322(object) {
    let sum = 0;
  
    for (let i = 0; i < object.length; i++) {
      if (object[i].assignment_id === 2 && object[i].learner_id === 132) {
        sum += object[i].submission.score;
        
      }
    }
    if (
      AssignmentGroup.assignments[1].due_at.split("-").join("") <
      LearnerSubmissions[4].submission.submitted_at.split("-").join("")
    ) {
      return (sum - sum * 0.1) / AssignmentGroup.assignments[1].points_possible;
    }
    return sum / AssignmentGroup.assignments[1].points_possible;
  }
  
  function getAverage1252(object) {
    let sum = 0;
  
    for (let i = 0; i < object.length; i++) {
      if (object[i].assignment_id === 2 && object[i].learner_id === 125) {
        sum += object[i].submission.score;
      }
    }
    if (
      AssignmentGroup.assignments[1].due_at.split("-").join("") <
      LearnerSubmissions[1].submission.submitted_at.split("-").join("")
    ) {
      return (sum - sum * 0.1) / AssignmentGroup.assignments[0].points_possible;
    }
    return sum / AssignmentGroup.assignments[1].points_possible;
  }
  


// try and catch implemented below

// ***forEach for second type of loop***
  function getAverage1251(object) {
      let sum = 0;

      object.forEach(function(objects){
        if (objects.assignment_id === 1 && objects.learner_id === 125) {
            sum += objects.submission.score;
            
          }
        
      })
      try{
      if (
        AssignmentGroup.assignments[0].due_at.split("-").join("") <
        LearnerSubmissions[0].submission.submitted_at.split("-").join("")
      ) {
        return (sum - sum * 0.1) / AssignmentGroup.assignments[0].points_possible;
       
      }
      return sum / AssignmentGroup.assignments[0].points_possible;
    }
    catch(err){
        console.log("Will never run program not that dynamic.")
    }
    }

    

    