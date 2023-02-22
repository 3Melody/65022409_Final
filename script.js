let fullname = document.getElementById('nameinput');
let surname = document.getElementById('surnameinput');
let gender = document.getElementById('genderinput');
let date = document.getElementById('dateinput');

let table = document.getElementById('newtabledata');


function adddata(){
   let dataname = fullname.value;
   let datasurname = surname.value;
   let datagender = gender.value;
   let datadate = date.value;
   
   if(dataname == "" || datasurname == "" || datagender == "none" || datadate == "") {
    alert("ข้อมูลไม่ครบ")
   }else {
    let newtable = document.createElement('tr')
    table.appendChild(newtable);
    let datanametd = document.createElement('td')
    let datasurnametd = document.createElement('td')
    let datagendertd = document.createElement('td')
    let datadatetd = document.createElement('td')
    newtable.appendChild(datanametd);
    newtable.appendChild(datasurnametd);
    newtable.appendChild(datagendertd);
    newtable.appendChild(datadatetd);

    datanametd.innerText = dataname
    datasurnametd.innerText = datasurname
    datagendertd.innerText = datagender
    datadatetd.innerText = datadate
   }

   

   
   
   
   
   console.log(dataname)
   console.log(datasurname)
   console.log(datagender)
   console.log(datadate)
   
}

