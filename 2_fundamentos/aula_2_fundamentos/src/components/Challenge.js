const Challenge = () => {
    const a = 10;
    const b = 20;
  return (
    <div>
        <p>A: {a}</p>
        <p>B: {b}</p>
        <button onClick = {() => console.log(a+b)}>
            Clique para somar!!!</button>
    </div>
  );
};

export default Challenge;