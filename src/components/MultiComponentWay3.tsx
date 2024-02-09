function MultiComponent3() {
    let items = [
        'Perth', 
        'Sydney', 
        'Melbourne', 
        'Brisbane', 
        'Darwin'
    ];

    items = [];
    
    return (
    <>
        <h1>List</h1>
         {items.length === 0 ? <p>No item found</p> : null}
         {items.length === 0 && <p>No item found</p> }
        <ul className="list-group">
            {items.map(item => <li>{item}</li>)}
        </ul>
    </>
  );
}
export default MultiComponent3;