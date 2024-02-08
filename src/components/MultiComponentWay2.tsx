function MultiComponent2() {
    const items = [
        'Perth', 
        'Sydney', 
        'Melbourne', 
        'Brisbane', 
        'Darwin'
    ];

    
    return (
    <>
        <h1>This is an exampke of react doesnt allow multiple component. and this it how you need to handle it</h1>
        <ul className="list-group">
            {items.map(item => <li>{item}</li>)}
        </ul>
    </>
  );
}
export default MultiComponent2;