function MultiComponent2() {
    let items = [
        'Perth', 
        'Sydney', 
        'Melbourne', 
        'Brisbane', 
        'Darwin'
    ];

    items = [];
    
    const getMessage = () =>{
         items.length === 0 ? <p>No items found</p> : null;
    }
    return (
    <>
        <h1>List</h1>
        {getMessage()}
        <ul className="list-group">
            {items.map(item => <li>{item}</li>)}
        </ul>
    </>
  );
}
export default MultiComponent2;