
 document.getElementById("clickMe").addEventListener('click', async () => {
    let table = document.getElementById('generatedContent')
 
    let result = await fetch(location.origin + "/products/get", { method: 'GET' })
    .then(res => res.json())
    .catch(err => console.log(err));
   
 
    let tableHTML = `
    <tr>
       <th>productName</th>
       <th>price</th>
       <th>Category</th>
 
   </tr>
    
    `;
 
    result.products.forEach(product => {
     tableHTML += `
       <tr>
         <td>${product.productName}</td>
         <td>${product.price}</td>
         <td>${product.userID}</td>
       </tr>
     `;
   });
 
   table.innerHTML = tableHTML;
 });
  
  
  
  /* document.addEventListener("DOMContentLoaded", (event) => { 
   //vis alle varer
   display.addEventListener('click', async () => {
       let display = document.getElementById('display');
       let tabel = document.getElementById('tabel');
     tabel.innerHTML = `
     <tr>
       <th> Name </th>
       <th> Price </th>
       <th> UserID </th>
     </tr>
     `;
    
     await fetch ('http://localhost:3000/products/get', {
       method: 'GET',
       headers: {
         "Content-Type": "application/json",
       },
     })
     .then((res) => res.json())
     .then((res) => {
       console.log(res);
    
       res.forEach((e) => {
         tabel.innerHTML += `
         <tr>
           <td> ${e.productName} </td>
           <td> ${e.price} </td>
           <td> ${e.userID} </td>
         </tr>
         `;
       });
     });
   });
   })
   */
  