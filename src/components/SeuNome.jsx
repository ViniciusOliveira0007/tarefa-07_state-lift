function SeuNome({ setNome }) {
  return (
    <div className="input-container">



        
      <input

        type="text"
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome..."
        className="matrix-input"
      />



    </div>
  );
}

export default SeuNome;