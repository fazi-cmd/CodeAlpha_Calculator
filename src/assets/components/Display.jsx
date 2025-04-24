function Display({Calval}) {
  return (
   <div>
   <input type="text" style={{ 
     background: 'rgba(0, 0, 0, 0.7)',
     color: 'white',
     borderRadius: '10px',
     padding: '10px',
     textAlign: 'right',
     fontSize: '24px',
     fontWeight: 'bold',
     width: '90%',
     height: '30px',
     overflow: 'hidden',
     textOverflow: 'ellipsis',
     boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
   }} placeholder="" value={Calval}onChange={(e) => setValue(e.target.value)}/>
   </div>
  );
}
export default Display;