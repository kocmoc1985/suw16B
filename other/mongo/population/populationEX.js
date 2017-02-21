  //Find education which belongs to student -> select * from educations where Strudent.name = 'john doe'
    studentModel.findOne({ name: 'john doe' })
        .populate('_education') //OBS! not Shema name but the name of property in the Model
        .exec(function (err, student) {
          if (err) return handleError(err);
//          console.log("Pop student: " + student);
          console.log('Populate: %s', student._education.name);
    });
//    
//    //Find educations which a teacher has -> select * from educations where Teacher.name = 'tomas frank'
     teacherModel.findOne({ name: 'tomas frank' })
        .populate('_educations') //OBS! not Shema name but the name of property in the Model
        .exec(function (err, teacher) {
          if (err) return handleError(err);
          console.log("Populate teacher: " + teacher);
          console.log('Populate: %s', teacher._educations[0].name);
   });
    
   //Find students which a education has -> select * from students where Education.name = 'suw16'
     studentModel.find({})
        .populate({
            path: '_education',
            match: {name:'suw16'},
            select: 'name'
          })
        .exec(function (err, students) {
            students = students.filter(filtering);
            console.log(students);
          if (err) return handleError(err);
    });
    
    function filtering(element, index, array){
        if(element._education){
           return element._education.name === 'suw16';
        }
    }