const Events = () => {
    const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativou o evento!");
};

    const renderSomething = (x) =>{
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    };

    return(
    <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
    
    <div>
        <button onClick = {() =>console.log("Clicou")}>Clique aqui também!</button>
        <button 
        onClick={() => {
            if(true) {
                console.log("isso nao deveria existir =)");
            }
        }}
        >Clique aqui por favor!</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
    );
};

export default Events;