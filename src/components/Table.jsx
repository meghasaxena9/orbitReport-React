//import satData from "./satData";

//function satStatus(props){
 // const issatStatus = props.issatStatus;
  //return issatStatus ?  <td>Inactive</td> : <td>Active</td>
//}

const Table = ({ sat }) => {
  let tabBody=sat.map((data, id) => {
    const status = data.operational ? "Active" : "Inactive";
  return (
    <tbody>
     <tr key={id}>
       <td>{data.name}</td>
       <td>{data.type}</td>
       <td>{data.launchDate}</td>
       
      <td>{status}</td> 
     </tr>
     </tbody>
  );
  });
    let tab =
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     {tabBody}
   </table>
return tab
};
export default Table;