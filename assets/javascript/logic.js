var config = {
    apiKey: "AIzaSyAV6-jExjnWSpeyIqEulrmzXjFTvJqRbC8",
    authDomain: "employee-data-mgmt-7a881.firebaseapp.com",
    databaseURL: "https://employee-data-mgmt-7a881.firebaseio.com",
    projectId: "employee-data-mgmt-7a881",
    storageBucket: "employee-data-mgmt-7a881.appspot.com",
    messagingSenderId: "686989278264"
  };
  firebase.initializeApp(config);

  var name = "";
   var role = "";
   var startDate = "";
   var rate = "";
   var database = firebase.database();
  // var database = firebase.database();

  $("#submitBtn").on("click", function() {
                console.log("hello");
               // allow for submitt by onclick and enter key
               event.preventDefault();

             //pulls input data from forms and stores them to
              //corresponding variable
               name = $("#nameInput").val().trim();
               role = $("#roleInput").val().trim();
               startDate = $("#startDateInput").val().trim();
               rate = $("#rateInput").val().trim();

              database.ref().push({
                   name: name,
                   role: role,
                   startDate: startDate,
                   rate: rate,
                   dateAdded: firebase.database.ServerValue.TIMESTAMP
               });


              database.ref().on("value", function(snapshot) {
                   console.log(snapshot.val());
                   var newEmployee = snapshot.val();
                   var employeeKeys = Object.keys(newEmployee);
                   console.log(employeeKeys);
                   var lastIndex = employeeKeys.length - 1;
                   console.log(lastIndex);
                   var lastKey = employeeKeys[lastIndex];
                   console.log(lastKey);

                  /*var dataName = $("<td id='name'>");
                  var dataRole = $("<td id='role'>");
                  var dataMonth = $("<td id='month'>");
                  var dataRate = $("<td id='rate'>");
                  var row = $("<tr>").append(dataName).append(dataRole).append(dataMonth).append(dataRate);
                  $("#dataTable").append(row);
                  console.log(newEmployee[lastKey].name);
                  $("#name").text(newEmployee[lastKey].name);
                   $("#role").text(newEmployee[lastKey].role);
                   $("#month").text(newEmployee[lastKey].startDate);
                   $("#rate").text(newEmployee[lastKey].rate);*/
                  addRow(newEmployee[lastKey].name, newEmployee[lastKey].role, newEmployee[lastKey].startDate, newEmployee[lastKey].rate);
               }, function(errorObject) {
                   console.log("The read failed: " + errorObject.code);
                 })
               });

 function addRow (name, role, rate, start){
  $("#dataTable").append(
    '<tr>' +
        '<td>' + name + '</td>' +
        '<td>' + role + '</td>' +
        '<td>' + start + '</td>' +
        '<td>' + 'calc' + '</td>' +
        '<td>' + rate + '</td>' +
        '<td>' + 'calc' + '</td>' +
      '</tr>'
  );
 }
 







