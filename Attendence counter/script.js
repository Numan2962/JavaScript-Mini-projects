var result = document.querySelector('.result');        //The querySelector() method returns the first element that matches a specified CSS selector in the document.
var content = document.querySelector('.content');
var subb = document.querySelector('#subb');
var presentCount = 0, absentCount = 0, lateCount = 0;

/* array of object */

var students = [
  
  {
    "name": "Abdullah Al Numan",
    "id": 171442003
  },
  {
    "name": "Lincoln Burrows",
    "id": 171442101
  },
  {
    "name": "Michel Scofield",
    "id": 171442102
  },
  {
    "name": "Fernando Sucre",
    "id": 171442103
  },
  {
    "name": "Sara Tancredi",
    "id": 171442104
  },
  {
    "name": "Alexander Mahone",
    "id": 171442105
  },
  {
    "name": "Kit Harington",
    "id": 171442106
  },
  {
    "name": "Sophie Turner",
    "id": 171442107
  },
  {
    "name": "Maisie Williams",
    "id": 171442108
  },
  {
    "name": "Peter Dinklage",
    "id": 171442109
  },
  {
    "name": "Emilia Clarke",
    "id": 171442110
  },
  {
    "name": "Natalie Dormer",
    "id": 171442111
  },
  {
    "name": "Arya Stark",
    "id": 171442112
  },
  {
    "name": "John Snow",
    "id": 171442113
  },
  {
    "name": "Wentworth Miller",
    "id": 171442114
  },
  
  
];

/* function for present count */
function countPresent(i) {
  ++presentCount;
  document.querySelector('#present-btn-'+i).disabled = true;   /* button will be disabled after clicking one */
  document.querySelector('#absent-btn-'+i).disabled = true;
  document.querySelector('#late-btn-'+i).disabled = true;
  document.querySelector('#present-btn-'+i).style.backgroundColor = "green"; /* button color will be green if present button is clicked */
}


/* function for absent count */
function countAbsent(i) {
  ++absentCount;
  document.querySelector('#absent-btn-'+i).disabled = true;       /* button will be disabled after clicking one */
  document.querySelector('#present-btn-'+i).disabled = true;
  document.querySelector('#late-btn-'+i).disabled = true;
  document.querySelector('#absent-btn-'+i).style.backgroundColor = "red";     /* button color will be red if absent button is clicked */
}

/* function for late count */
function countLate(i) {
  ++lateCount;
  document.querySelector('#late-btn-'+i).disabled = true;       /* button will be disabled after clicking one */
  document.querySelector('#absent-btn-'+i).disabled = true;
  document.querySelector('#present-btn-'+i).disabled = true;
  document.querySelector('#late-btn-'+i).style.backgroundColor = "brown";  /* button color will be brown if late button is clicked */

}

/* inserting data into HTML Table from array of objec */ 
function insertdata(){
var k = '<tbody>';

for(var i = 0; i<students.length; i++)
{
  k+= '<tr>';
  k+='<td>' + `${i+1}` + '</td>';
  k+='<td>' + students[i].name + '</td>';
  k+='<td>' + students[i].id + '</td>';
  k+=`<td>
  <button onclick='countPresent(${i})' id='present-btn-${i}' class='btn'>Present</button>
  <button onclick='countAbsent(${i})' id='absent-btn-${i}' class='btn'>Absent</button>
  <button onclick='countLate(${i})' id='late-btn-${i}' class='btn'>Late</button>
    
    </td>`;
  k+= '</tr>'
  k+='</tbody>'
}

document.getElementById('tabledata').innerHTML = k;
}
 

/* showing attendence result of students */
function showResult() {
  result.innerHTML = 
  `
    <p>Number of present student(s): ${presentCount}</p> <p>Number of absent student(s): ${absentCount}</p><p> Number of late comer(s): ${lateCount}</p>
  `;
  result.style.display = 'block';
  content.style.visibility = 'visible';   /* content will be visible when this function will be called while clicking the specific button */
  
  subb.style.backgroundColor="green";
  subb.innerHTML="Submitted";
}


insertdata();
